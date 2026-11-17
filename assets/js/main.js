/* PampaVision · interações do site (sem bibliotecas) */
(function () {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const fmt = (n, casas = 0) => n.toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas });
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------- tema */
  const raiz = document.documentElement;
  try {
    const salvo = localStorage.getItem("pv-tema");
    if (salvo) raiz.setAttribute("data-theme", salvo);
  } catch (e) { /* sem armazenamento: segue o sistema */ }
  $(".tema").addEventListener("click", () => {
    const escuro = raiz.getAttribute("data-theme")
      ? raiz.getAttribute("data-theme") === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const novo = escuro ? "light" : "dark";
    raiz.setAttribute("data-theme", novo);
    try { localStorage.setItem("pv-tema", novo); } catch (e) { /* ignora */ }
  });

  /* ---------------------------------------------------------------- menu */
  const btn = $(".menu-btn"), links = $(".links");
  btn.addEventListener("click", () => {
    const aberto = links.classList.toggle("aberto");
    btn.setAttribute("aria-expanded", aberto);
  });
  $$(".links a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("aberto");
    btn.setAttribute("aria-expanded", "false");
  }));

  /* ------------------------------------------- barra de progresso e topo */
  const barra = $(".progresso"), topo = $("#topo");
  const aoRolar = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    barra.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
    topo.classList.toggle("solido", scrollY > 30);
  };
  addEventListener("scroll", aoRolar, { passive: true });
  aoRolar();

  /* ----------------------------------------------------- seção ativa no menu */
  const secoes = $$("main section[id]");
  const vigia = new IntersectionObserver(ents => {
    ents.forEach(e => {
      if (e.isIntersecting) {
        $$(".links a").forEach(a => a.classList.toggle("ativo", a.getAttribute("href") === "#" + e.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  secoes.forEach(s => vigia.observe(s));

  /* ----------------------------------------------------------- contadores */
  const contar = el => {
    const alvo = parseFloat(el.dataset.alvo), casas = parseInt(el.dataset.casas || "0", 10);
    if (reduzir) { el.textContent = fmt(alvo, casas); return; }
    const t0 = performance.now(), dur = 1400;
    const passo = t => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(alvo * e, casas);
      if (k < 1) requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
  };

  /* -------------------------------------------------- revelar ao rolar */
  const revela = new IntersectionObserver(ents => {
    ents.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visivel");
      $$(".contador", e.target).forEach(contar);
      revela.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  $$(".revelar, .numeros").forEach(el => revela.observe(el));

  /* ----------------------------------------------------------- linha do tempo */
  const lt = $("#linha-tempo");
  const desenharMarcos = tag => {
    lt.innerHTML = "";
    (window.MARCOS || []).forEach((m, i) => {
      if (tag !== "todos" && !m.tags.includes(tag)) return;
      const li = document.createElement("li");
      li.className = "marco" + (i % 2 ? " dir" : "");
      li.innerHTML =
        `<div class="ponto"></div><article><time>${m.data}</time><h3></h3><p></p>` +
        `<div class="tags">${m.tags.map(t => `<span class="t t-${t.normalize("NFD").replace(/[^a-z]/gi, "")}">${t}</span>`).join("")}</div></article>`;
      li.querySelector("h3").textContent = m.titulo;
      li.querySelector("p").textContent = m.texto;
      lt.appendChild(li);
      requestAnimationFrame(() => li.classList.add("visivel"));
    });
  };
  $$(".filtro").forEach(b => b.addEventListener("click", () => {
    $$(".filtro").forEach(x => x.classList.toggle("ativo", x === b));
    desenharMarcos(b.dataset.tag);
  }));
  desenharMarcos("todos");

  /* andamento do semestre */
  const S = window.SEMESTRE;
  if (S) {
    const ini = new Date(S.inicio), fim = new Date(S.fim), hoje = new Date();
    const p = Math.max(0, Math.min(1, (hoje - ini) / (fim - ini)));
    $(".semestre .barra span").style.width = (p * 100).toFixed(1) + "%";
    $(".semestre-txt").textContent = `${Math.round(p * 100)}% do semestre · ${(window.MARCOS || []).length} marcos registrados`;
  }

  /* ----------------------------------------------------------- funil */
  const funil = $("#funil"), F = window.FUNIL || [];
  const maior = Math.max(...F.map(f => f.valor));
  F.forEach((f, i) => {
    const d = document.createElement("div");
    d.className = "degrau";
    d.style.setProperty("--w", (f.valor / maior * 100).toFixed(1) + "%");
    d.style.setProperty("--atraso", (i * 120) + "ms");
    d.innerHTML = `<span class="rot"></span><span class="bar"><b>${fmt(f.valor)}</b></span>`;
    d.querySelector(".rot").textContent = f.rotulo;
    funil.appendChild(d);
  });

  /* ----------------------------------------------------------- próximos passos */
  const nomes = { feito: "feito", andamento: "em andamento", planejado: "planejado" };
  const passos = $("#passos");
  (window.PASSOS || []).forEach(p => {
    const a = document.createElement("article");
    a.className = "item " + p.situacao;
    a.innerHTML = `<span class="sit">${nomes[p.situacao] || p.situacao}</span><h3></h3><p></p>`;
    a.querySelector("h3").textContent = p.titulo;
    a.querySelector("p").textContent = p.texto;
    passos.appendChild(a);
  });

  $("#atualizado").textContent = window.ATUALIZADO || "";
})();
