import { defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons/Image'

export const figureBlock = defineType({

	name: 'figureBlock',
	title: 'Figure',
	type: 'object',
	icon: ImageIcon,

	fieldsets: [{ name: 'flags', options: { columns: 2 } }],

	fields: [
		defineField({
			name: 'image',
			type: 'image',
			options: { hotspot: true },
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
			media: 'image',
		},
		prepare({ caption, media }) {
			return {
				title: caption || 'Figure',
				media,
			}
		},
	},
})
