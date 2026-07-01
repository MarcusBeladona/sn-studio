/**
 * Config principal do Sanity Studio (sn-studio).
 *
 * CMS do portfólio marcusbeladona.com — edita Cases e Articles em PT/EN.
 * Ver README.md para estrutura completa do projeto.
 *
 * Plugins:
 * - structureTool: menu lateral customizado (structure.js)
 * - visionTool: playground GROQ no Studio
 * - documentInternationalization: traduções como documentos separados
 */
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { documentInternationalization } from '@sanity/document-internationalization'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'
import { supportedLanguages, translatedSchemaTypes } from './supportedLanguages'

export default defineConfig({

	title: 'sn-studio',
	name: 'default',

	projectId: 'zt4joqnt',
	dataset: 'production',

	plugins: [
		structureTool({ structure }),
		visionTool(),
		documentInternationalization({
			supportedLanguages,
			schemaTypes: translatedSchemaTypes,
		}),
	],

	schema: {
		types: schemaTypes,
		templates: (prev) =>
			prev.filter((template) => !translatedSchemaTypes.includes(template.id)),
	},

	releases: { enabled: false },
})
