# sn-studio

CMS (Sanity Studio) do portfólio [marcusbeladona.com](https://marcusbeladona.com).

Aqui você edita **Cases** (projetos) e **Articles** (textos) em **PT** e **EN**. O frontend consome esse conteúdo via API do Sanity — este repo é só o Studio, não o site.

## Comandos

```bash
npm run dev      # Studio local (http://localhost:3333)
npm run build    # Build estático
npm run deploy   # Publica o Studio na Sanity
```

## Estrutura de pastas

```
sn-studio/
├── sanity.config.js       # Config principal: plugins, schema, i18n
├── sanity.cli.js          # CLI: projectId, dataset, deploy
├── structure.js           # Menu lateral do Studio (por idioma)
├── supportedLanguages.js  # Idiomas e tipos traduzíveis
├── static/style.css       # CSS customizado do Studio
└── schemaTypes/
    ├── index.js           # Registra todos os tipos no Sanity
    ├── documents/         # Tipos de documento (case, article)
    ├── blocks/            # Blocos reutilizáveis (page builder)
    └── shared/            # Campos compartilhados entre documentos
```

## Modelo de conteúdo

### Documentos

| Tipo      | Uso                         | Body                                      |
|-----------|-----------------------------|-------------------------------------------|
| `case`    | Projetos do portfólio       | Array de `imageBlock` + `videoBlock`      |
| `article` | Artigos/textos              | `richTextBlock` (Portable Text + blocos)  |

Ambos compartilham campos em `schemaTypes/shared/documentFields.js`:
title, description, tags, release, bookmark, slug, thumb, language.

**Cases** também têm `related` — referências a articles relacionados.

### Blocos (`schemaTypes/blocks/`)

| Bloco           | Onde aparece                          | O que é                          |
|-----------------|---------------------------------------|----------------------------------|
| `imageBlock`    | body de case, richTextBlock           | Imagem + caption                 |
| `videoBlock`    | body de case                          | Arquivo de vídeo + caption       |
| `richTextBlock` | body de article                       | Portable Text com highlight, cards, containers e imagens embutidas |
| `card`          | dentro de richTextBlock e container   | Card com ícone Phosphor, título e descrição |
| `container`     | dentro de richTextBlock               | Layout de até 3 cards/imagens com flags de span/container |

### Internacionalização

Usa `@sanity/document-internationalization`:
- Cada documento tem campo `language` (`pt` ou `en`)
- Traduções são documentos separados ligados pelo plugin
- O menu lateral (`structure.js`) filtra por idioma
- Templates padrão de criação são removidos em `sanity.config.js` — use os templates do plugin

Idiomas e tipos traduzíveis: `supportedLanguages.js`.

## Onde mexer quando...

| Quero...                        | Arquivo                                      |
|---------------------------------|----------------------------------------------|
| Adicionar um idioma             | `supportedLanguages.js` + `structure.js`     |
| Novo tipo de documento          | `schemaTypes/documents/` + `index.js` + `supportedLanguages.js` (se traduzível) |
| Novo bloco no page builder      | `schemaTypes/blocks/` + registrar em `index.js` + incluir no `of` do pai |
| Campo comum a case e article    | `schemaTypes/shared/documentFields.js`       |
| Mudar menu lateral              | `structure.js`                               |
| Plugin ou config geral          | `sanity.config.js`                           |
