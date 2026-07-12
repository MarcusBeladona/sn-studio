import { defineField, defineType } from 'sanity'
import { DesktopIcon } from '@sanity/icons'

export const containerBlock = defineType({

	name: 'containerBlock',
	title: 'Container',
	type: 'object',
	icon: DesktopIcon,

	fieldsets: [{ name: 'flags', options: { columns: 2 } }],

	fields: [
		defineField({
			name: 'image',
			type: 'figureBlock',
			validation: (rule) => rule.required(),
		}),

		// FLAGS

		defineField({
			name: 'style',
			type: 'string',
			options: {
				list: [
					{ title: 'Window', value: 'window' },
					{ title: 'Container', value: 'container' }
				],
				layout: 'radio'
			}
		}),
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
			media: 'image.image',
		},
		prepare({ media }) {
			return {
				title: 'Container',
				media,
			}
		},
	},
})
