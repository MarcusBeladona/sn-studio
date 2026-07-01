/**
 * Estrutura do menu lateral do Studio.
 *
 * Organiza o conteúdo por idioma (PT / EN), e dentro de cada um
 * lista Cases e Articles filtrados pelo campo `language`.
 * Novos tipos de documento traduzíveis entram em `contentTypes`.
 */
import { DocumentTextIcon, DocumentsIcon, EarthGlobeIcon } from '@sanity/icons'
import { supportedLanguages } from './supportedLanguages'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

function languageSection(S, context, language) {
	return S.listItem()
		.title(language.title)
		.icon(EarthGlobeIcon)
		.child(
			S.list()
				.title(language.title)
				.items([
					orderableDocumentListDeskItem({
						type: 'case',
						title: 'Cases',
						filter: 'language == $language',
						params: {
							language: language.id,
						},
						S,
						context,
					}),

					orderableDocumentListDeskItem({
						type: 'article',
						title: 'Articles',
						filter: 'language == $language',
						params: {
							language: language.id,
						},
						S,
						context,
					}),
				]),
		)
}

export const structure = (S, context) =>
	S.list()
		.title('Content')
		.items(
			supportedLanguages.flatMap((language, index) => [
				...(index > 0 ? [S.divider()] : []),
				languageSection(S, context, language),
			]),
		)