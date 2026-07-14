import { defineField, defineType } from 'sanity'
import { InlineIcon } from '@sanity/icons'

export const diffBlock = defineType({

	name: 'diffBlock',
	title: 'Diff',
	type: 'object',
	icon: InlineIcon,

	fieldsets: [{ name: 'flags', options: { columns: 2 } }],

	fields: [
		defineField({
			name: 'images',
			type: 'array',
			of: [{ type: 'image' }],
			validation: (rule) => rule.required().max(2),
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
			media: 'images.0',
		},
		prepare({ media }) {
			return {
				title: 'Diff',
				media,
			}
		},
	},
})
