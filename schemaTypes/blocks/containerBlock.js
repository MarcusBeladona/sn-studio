import { defineField, defineType } from 'sanity'
import { ComposeIcon } from '@sanity/icons'

export const containerBlock = defineType({
	name: 'container',
	title: 'Container',
	type: 'object',
	icon: ComposeIcon,
	fieldsets: [
		{
			name: 'flags',
			title: 'Options',
			options: { columns: 2 },
		},
	],
	fields: [
		defineField({
			name: 'isSpanFull',
			type: 'boolean',
			title: 'Span Full',
			initialValue: false,
			fieldset: 'flags',
		}),
		defineField({
			name: 'hasContainer',
			type: 'boolean',
			title: 'On Container',
			initialValue: false,
			fieldset: 'flags',
		}),
		defineField({
			name: 'items',
			type: 'array',
			validation: (rule) => rule.max(3),
			of: [{ type: 'card' }, { type: 'imageBlock' }],
		}),
	],
	preview: {
		select: {
			items: 'items',
		},
		prepare({ items }) {
			const n = Array.isArray(items) ? items.length : 0
			return {
				title: 'Container',
				subtitle: n ? `${n}/3` : '0/3',
			}
		},
	},
})
