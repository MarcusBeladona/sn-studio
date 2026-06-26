/**
 * Document type: Article (texto/artigo).
 *
 * Body = richTextBlock (Portable Text com blocos embutidos: card, container, image).
 */
import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'
import {
	bookmarkField,
	descriptionField,
	documentGroups,
	languageField,
	releaseField,
	slugField,
	tagsField,
	thumbField,
	titleField,
} from '../shared/documentFields'

export const articleType = defineType({
	name: 'article',
	title: 'Articles',
	type: 'document',
	icon: DocumentTextIcon,
	groups: documentGroups,
	fields: [
		titleField,
		descriptionField,
		tagsField,
		releaseField,
		defineField({
			name: 'body',
			title: 'Body',
			type: 'richTextBlock',
			group: 'content',
		}),
		bookmarkField,
		slugField,
		languageField,
		thumbField,
	],
	preview: {
		select: {
			title: 'title',
			media: 'thumb',
		},
	},
})
