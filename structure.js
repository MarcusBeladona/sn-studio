/**
 * Estrutura do menu lateral do Studio.
 *
 * Organiza o conteúdo por idioma (PT / EN), e dentro de cada um
 * lista Cases e Articles filtrados pelo campo `language`.
 * Novos tipos de documento traduzíveis entram em `contentTypes`.
 */
import { DocumentTextIcon, DocumentsIcon, EarthGlobeIcon } from '@sanity/icons'
import { supportedLanguages } from './supportedLanguages'

const contentTypes = [
	{ schemaType: 'case', title: 'Cases', icon: DocumentsIcon },
	{ schemaType: 'article', title: 'Articles', icon: DocumentTextIcon },
]

function localizedDocumentList(S, { schemaType, title, language }) {
	return S.documentTypeList(schemaType)
		.title(title)
		.filter(`_type == "${schemaType}" && language == "${language.id}"`)
		.defaultOrdering([{ field: 'release', direction: 'desc' }])
		.initialValueTemplates([S.initialValueTemplateItem(`${schemaType}-${language.id}`)])
}

function languageSection(S, language) {
	return S.listItem()
		.title(language.title)
		.icon(EarthGlobeIcon)
		.child(
			S.list()
				.title(language.title)
				.items(
					contentTypes.map(({ schemaType, title, icon }) =>
						S.listItem()
							.title(title)
							.icon(icon)
							.child(localizedDocumentList(S, { schemaType, title, language })),
					),
				),
		)
}

export const structure = (S) =>
	S.list()
		.title('Content')
		.items(
			supportedLanguages.flatMap((language, index) => [
				...(index > 0 ? [S.divider()] : []),
				languageSection(S, language),
			]),
		)
