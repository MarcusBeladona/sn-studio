/**
 * Config de internacionalização.
 *
 * supportedLanguages — idiomas disponíveis no Studio.
 * translatedSchemaTypes — tipos que o plugin @sanity/document-internationalization
 *   gerencia (cada tradução vira um documento separado com campo `language`).
 */
export const supportedLanguages = [
	{ id: 'pt', title: 'Português' },
	{ id: 'en', title: 'English' },
]

export const translatedSchemaTypes = ['article']
