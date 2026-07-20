
import { EarthGlobeIcon } from '@sanity/icons/EarthGlobe'
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