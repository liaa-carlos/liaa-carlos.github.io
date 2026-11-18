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
    ├── img/              favicon e o guia de registro fotográfico
    └── video/            vídeo-resumo de 3 min (MP4), pôster e legenda (WebVTT)
```

O vídeo é gerado pelo script `src/gerar_video_retrospectiva_v2.py` do projeto. Para trocar, substitua os três arquivos de `assets/video/` mantendo os nomes. O upload pelo navegador do GitHub aceita arquivos de até 25 MB; o vídeo atual tem 7,9 MB.

## Três idiomas

| Idioma | Página | Dados | Vídeo |
| --- | --- | --- | --- |
| Português | `index.html` | `assets/js/dados.js` | `assets/video/pampavision_3min.*` |
| English | `en/index.html` | `assets/js/dados.en.js` | `assets/video/pampavision_3min_en.*` |
| Español | `es/index.html` | `assets/js/dados.es.js` | `assets/video/pampavision_3min_es.*` |

O seletor PT · EN · ES fica no menu de cada página. O CSS e o `main.js` são os mesmos para as três; o `main.js` lê o idioma em `<html lang>` e ajusta números, situações e rótulos das tags. As tags dos marcos ficam sempre em português nos três arquivos de dados, porque são chaves. Ao mudar um texto ou um marco, mude nos três.

Os vídeos em inglês e espanhol são gerados por `src/gerar_video_retrospectiva_v3.py` no projeto (vozes Christopher e Tomás).

## Atualizar ao longo do semestre

Edite `assets/js/dados.js` (e as versões `dados.en.js` e `dados.es.js`):

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
