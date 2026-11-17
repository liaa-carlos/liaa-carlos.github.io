# PampaVision · site do projeto (AL5162 LIAA)

Site estático, só com HTML, CSS e JavaScript, sem build e sem bibliotecas. Apresenta o contexto, o problema, a proposta e a evolução do projeto PampaVision.

## Estrutura

```
liaa-carlos.github.io/
├── index.html            a página (seções 01 a 09)
├── .nojekyll             o GitHub Pages publica sem processar com Jekyll
├── README.md
└── assets/
    ├── css/style.css     visual, temas claro e escuro, telas pequenas
    ├── js/dados.js       O QUE MUDA: marcos, funil, próximos passos, data
    ├── js/main.js        interações (menu, contadores, linha do tempo)
    └── img/              favicon e o guia de registro fotográfico
```

## Atualizar ao longo do semestre

Edite só `assets/js/dados.js`:

- **Novo marco:** acrescente um item em `MARCOS` com `data`, `titulo`, `texto` e `tags`. As tags possíveis são decisão, dados, resultado, ferramentas, entrega e ética.
- **Passo concluído:** em `PASSOS`, mude `situacao` para `feito`, `andamento` ou `planejado`.
- **Data da atualização:** troque `ATUALIZADO`.
- **Datas do semestre:** ajuste `SEMESTRE` para a barra de andamento ficar certa.

## Publicar no GitHub Pages

1. Crie no GitHub o repositório `liaa-carlos.github.io`. Um endereço `NOME.github.io` só funciona se `NOME` for a conta ou a organização dona do repositório. Para ter `liaa-carlos.github.io`, crie uma organização chamada `liaa-carlos` (gratuita) e o repositório dentro dela.
2. Envie o conteúdo desta pasta para a raiz do repositório: pelo botão **Add file > Upload files**, ou com git (`git init`, `git add .`, `git commit`, `git push`).
3. No repositório, vá em **Settings > Pages**, escolha **Deploy from a branch**, ramo `main`, pasta `/ (root)`.
4. Em um ou dois minutos o site estará em `https://liaa-carlos.github.io`.

## Cuidados (LGPD e sigilo)

- Nenhuma foto do acervo de vistorias. As imagens são ilustrações e esquemas.
- Sem placa, chassi, nomes de terceiros ou e-mails.
- O site descreve as partes públicas do método (classificação de modelo e cor, YOLO, CLIP). Não detalhe aqui a combinação completa em estudo para depósito de patente.

## Ver localmente

Abra `index.html` no navegador, ou rode `python -m http.server` nesta pasta e acesse `http://localhost:8000`.
