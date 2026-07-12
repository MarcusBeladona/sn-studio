import { defineField, defineType } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export const carouselBlock = defineType({

	name: 'carouselBlock',
	title: 'Carousel',
	type: 'object',
	icon: ImagesIcon,

	fieldsets: [{ name: 'flags', options: { columns: 2 } }],

	fields: [
		defineField({
			name: 'images',
			type: 'array',
			of: [{ type: 'figureBlock' }],
			validation: (rule) => rule.required(),
		}),
		/* defineField({
			name: 'caption',
			type: 'string',
		}), */

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
			media: 'images.0.image',
		},
		prepare({ media }) {
			return {
				title: 'Carousel',
				media,
			}
		},
	},
})
