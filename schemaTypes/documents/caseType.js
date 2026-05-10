import { defineField, defineType } from "sanity";

export const caseType = defineType({
	name: 'case',
	title: 'Case',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: { source: 'title' },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'description',
			type: 'text',
			rows: 2,
			validation: (rule) => rule.required().max(110),
		}),
		defineField({
			name: 'tags',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				layout: 'tags'
			}
		}),
		defineField({
			name: 'thumb',
			type: 'image',
		}),
		defineField({
			name: 'body',
			type: 'richTextBlock',
		}),
	],
})
