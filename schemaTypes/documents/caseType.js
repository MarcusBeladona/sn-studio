/**
 * Document type: Case (projeto do portfólio).
 *
 * Body = page builder com imageBlock e videoBlock.
 * Tem campo `related` com referências a articles.
 */
import { defineArrayMember, defineField, defineType } from 'sanity'
import { DocumentsIcon } from '@sanity/icons'
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

export const caseType = defineType({
	name: 'case',
	title: 'Cases',
	type: 'document',
	icon: DocumentsIcon,
	groups: documentGroups,
	fields: [
		titleField,
		descriptionField,
		tagsField,
		releaseField,
		defineField({
			name: 'body',
			title: 'Body',
			type: 'array',
			of: [
				defineArrayMember({ type: 'imageBlock' }),
				defineArrayMember({ type: 'videoBlock' }),
			],
			group: 'content',
		}),
		defineField({
			name: 'related',
			title: 'Related Articles',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'article' }],
				}),
			],
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
