import { defineField, defineType } from 'sanity'
import { HashIcon } from '@sanity/icons/Hash'

export const iframeBlock = defineType({

	name: 'iframeBlock',
	title: 'iFrame',
	type: 'object',
	icon: HashIcon,

	fieldsets: [{ name: 'flags', options: { columns: 2 } }],

	fields: [
		defineField({
			name: 'url',
			type: 'url',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'caption',
			type: 'string',
		}),

		// Flags
		defineField({
			name: 'fullWidth',
			type: 'boolean',
			initialValue: true,
			fieldset: 'flags',
		}),
		defineField({
			name: 'border',
			type: 'boolean',
			initialValue: false,
			fieldset: 'flags',
		}),
	],

	preview: {
		select: {
			caption: 'caption',
		},
		prepare({ caption }) {
			return {
				title: 'iFrame',
				subtitle: caption ? caption : undefined,
			}
		},
	},
})
