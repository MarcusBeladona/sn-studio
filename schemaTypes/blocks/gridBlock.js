import { defineField, defineType } from 'sanity'
import { InlineElementIcon } from '@sanity/icons/InlineElement'

export const gridBlock = defineType({

	name: 'gridBlock',
	title: 'Grid',
	type: 'object',
	icon: InlineElementIcon,

	fieldsets: [{ name: 'flags', options: { columns: 2 } }],

	fields: [
		defineField({
			name: 'items',
			type: 'array',
			validation: (rule) => rule.max(3),
			of: [{ type: 'figureBlock' }, { type: 'videoBlock' }, { type: 'cardBlock' }],
		}),

		// FLAGS

		defineField({
			name: 'fullWidth',
			type: 'boolean',
			initialValue: true,
			fieldset: 'flags',
		}),
	],

	preview: {
		select: {
			items: 'items',
		},
		prepare({ items }) {
			const n = Array.isArray(items) ? items.length : 0
			return {
				title: 'Grid',
				subtitle: n ? `${n}/3` : '0/3',
			}
		},
	},
})
