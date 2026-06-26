/**
 * Campos compartilhados entre case e article.
 *
 * documentGroups — abas "Content" e "Options" no formulário.
 * Cada export é um defineField pronto pra compor nos document types.
 * Evita duplicar title, slug, thumb, etc.
 */
import { ALL_FIELDS_GROUP, defineArrayMember, defineField } from 'sanity'

export const documentGroups = [
	{ name: 'content', title: 'Content', default: true },
	{ name: 'options', title: 'Options' },
	{ ...ALL_FIELDS_GROUP, hidden: true },
]

export const languageField = defineField({
	name: 'language',
	type: 'string',
	readOnly: true,
	hidden: true,
	group: 'options',
})

export const titleField = defineField({
	name: 'title',
	type: 'string',
	validation: (rule) => rule.required(),
	group: 'content',
})

export const descriptionField = defineField({
	name: 'description',
	type: 'text',
	rows: 2,
	validation: (rule) => rule.required().max(110),
	group: 'content',
})

export const tagsField = defineField({
	name: 'tags',
	type: 'array',
	of: [defineArrayMember({ type: 'string' })],
	options: { layout: 'tags' },
	group: 'content',
})

export const releaseField = defineField({
	name: 'release',
	title: 'Release Date',
	type: 'date',
	initialValue: () => new Date().toISOString().split('T')[0],
	group: 'content',
})

export const bookmarkField = defineField({
	name: 'bookmark',
	type: 'boolean',
	initialValue: false,
	group: 'options',
})

export const slugField = defineField({
	name: 'slug',
	type: 'slug',
	options: { source: 'title' },
	validation: (rule) => rule.required(),
	group: 'options',
})

export const thumbField = defineField({
	name: 'thumb',
	type: 'image',
	options: { hotspot: true },
	group: 'options',
})
