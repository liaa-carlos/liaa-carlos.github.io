/* ==========================================================================
   Conteúdo que muda ao longo do semestre. Para atualizar o site, edite só
   este arquivo: acrescente um marco em MARCOS, mude a situação em PASSOS
   ou troque a data em ATUALIZADO.
   tags dos marcos: decisão, dados, resultado, ferramentas, entrega, ética
   situação dos passos: feito, andamento, planejado
   ========================================================================== */

window.ATUALIZADO = "17/11/2026";

window.SEMESTRE = { inicio: "2026-08-17", fim: "2026-12-18" };

window.MARCOS = [
  { data: "23/08", titulo: "O projeto começa",
    texto: "Primeiro classificador de fotos de vistoria em seis categorias (chassi, hodômetro, marca, motor e placas), com interface em Streamlit. O primeiro experimento com YOLO acertou 92,0%.",
    tags: ["decisão"] },
  { data: "25/08", titulo: "Nova direção: modelo e cor",
    texto: "O grupo decide focar em dois classificadores independentes: o modelo do veículo e a cor.",
    tags: ["decisão"] },
  { data: "29 a 30/08", titulo: "Importação e rotulagem assistida",
    texto: "Importação de lotes de fotos, recorte do veículo com YOLO, sugestão de modelo com CLIP, cor por HSV e revisão humana. Placa e chassi passam a aparecer ocultos.",
    tags: ["dados", "ética"] },
  { data: "08/09", titulo: "Proposta e primeira apresentação",
    texto: "Proposta do projeto e slides apresentados na disciplina.",
    tags: ["entrega"] },
  { data: "09/09", titulo: "Governança dos dados",
    texto: "Análise de quem controla os dados e do rito de autorização para o uso acadêmico.",
    tags: ["ética"] },
  { data: "17/09", titulo: "O rótulo vem do cadastro",
    texto: "Marca e modelo do registro da vistoria cobrem 100% das fotos. A IA passa a verificar, em vez de adivinhar. A unificação dos nomes de marca reduz 57 grafias a 46 marcas.",
    tags: ["decisão", "dados"] },
  { data: "20/09", titulo: "O veículo como unidade",
    texto: "Uma amostra mostra cerca de 15% de fotos com capô aberto. A divisão treino e teste passa a ser por veículo, para a frente e a traseira do mesmo carro não vazarem entre os grupos.",
    tags: ["dados", "decisão"] },
  { data: "06/10", titulo: "Acervo organizado por modelo",
    texto: "Lotes por modelo de carro, com vista, ano e cor. No primeiro lote, 99,5% das fotos de frente encontram a traseira do mesmo veículo.",
    tags: ["dados"] },
  { data: "07 a 09/10", titulo: "Pré-triagem com IA de visão e linguagem",
    texto: "60.042 fotos avaliadas por um modelo de linguagem com visão: 37.780 com o capô fechado, cerca de 94 fotos por minuto.",
    tags: ["dados", "resultado"] },
  { data: "24 a 27/10", titulo: "Ferramentas de anotação",
    texto: "CVAT, Label Studio e Roboflow comparados em uma grade de 15 critérios.",
    tags: ["ferramentas"] },
  { data: "02/11", titulo: "Qualidade dos dados",
    texto: "Fotos de fotos, pessoas sem o carro e cor do cadastro errada por modelo inteiro: o que a curadoria precisa olhar.",
    tags: ["dados"] },
  { data: "07/11", titulo: "Treino em GPU H100",
    texto: "Modelo: 95,1% de acerto no teste (F1 macro 0,951), 500 épocas em 3,2 horas. Cor: 93,6% (F1 macro 0,882).",
    tags: ["resultado"] },
  { data: "08/11", titulo: "O modelo no celular",
    texto: "Proposta de uso em campo: Android como aplicativo web com ONNX, iPhone com Core ML.",
    tags: ["decisão"] },
  { data: "09/11", titulo: "Teste das ferramentas",
    texto: "As mesmas 92 fotos públicas anotadas no CVAT e no Label Studio: concordância de 81,5% no modelo, kappa 0,80.",
    tags: ["ferramentas", "resultado"] },
  { data: "11 a 12/11", titulo: "Retorno do professor",
    texto: "49 apontamentos viraram uma planilha com 37 atividades e as versões 6 a 10 da apresentação.",
    tags: ["entrega"] },
  { data: "13/11", titulo: "Guias de registro fotográfico",
    texto: "Guia de boas práticas para o vistoriador e versões para vistoria predial, agricultura, documentos e saúde.",
    tags: ["ferramentas"] },
  { data: "15/11", titulo: "Comparativo técnico das ferramentas",
    texto: "A tabela comparativa refeita em seis partes, com documento de apoio para leigos e operadores.",
    tags: ["ferramentas", "entrega"] },
  { data: "17/11", titulo: "Site do projeto",
    texto: "Este site, para acompanhar o projeto e apoiar a apresentação final.",
    tags: ["entrega"] },
  { data: "17/11", titulo: "Vídeos com IA",
    texto: "Retrospectiva de 2 minutos e vídeo-resumo animado de 3 minutos, gerados por código: telas e animação desenhadas em Python, voz neural em português e montagem com ffmpeg.",
    tags: ["entrega"] },
];

window.FUNIL = [
  { rotulo: "Fotos nos arquivos de origem", valor: 188164 },
  { rotulo: "Avaliadas na pré-triagem", valor: 60042 },
  { rotulo: "Com o capô fechado", valor: 37780 },
  { rotulo: "Importadas (frente e traseira)", valor: 74891 },
  { rotulo: "Conjunto de treino", valor: 74149 },
];

window.PASSOS = [
  { titulo: "Treinar modelo e cor", texto: "Primeira rodada completa em GPU.", situacao: "feito" },
  { titulo: "Comparar ferramentas de anotação", texto: "Grade técnica e teste com 92 fotos.", situacao: "feito" },
  { titulo: "Registrar as rodadas e as previsões por foto", texto: "Base para todas as medições seguintes.", situacao: "andamento" },
  { titulo: "Verificar o cadastro", texto: "Medir alarme falso e detecção de divergência no ponto de operação escolhido.", situacao: "planejado" },
  { titulo: "Auditar rótulos", texto: "Julgar 100 erros do modelo: erro da rede ou erro do cadastro?", situacao: "planejado" },
  { titulo: "Calibrar a confiança", texto: "Gravar as saídas da rede e medir se 90% de confiança acerta 90% das vezes.", situacao: "planejado" },
  { titulo: "Conferir vazamento entre vistorias", texto: "Procurar o mesmo carro em vistorias diferentes no treino e no teste.", situacao: "planejado" },
  { titulo: "Decidir as cores raras", texto: "Com os orientadores: juntar, coletar mais ou deixar de fora.", situacao: "planejado" },
  { titulo: "Levar ao celular", texto: "Aplicativo em modo campo, com o modelo rodando no aparelho.", situacao: "planejado" },
  { titulo: "Apresentação final", texto: "Resultados, aprendizados e o que fica para a dissertação.", situacao: "planejado" },
];
