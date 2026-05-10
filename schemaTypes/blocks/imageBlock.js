import { defineField, defineType } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export const imageBlock = defineType({
	name: 'imageBlock',
	title: 'Image',
	type: 'object',
	icon: ImagesIcon,
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
			initialValue: true,
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
			name: 'hasBorder',
			type: 'boolean',
			title: 'Has Border',
			initialValue: false,
			fieldset: 'flags',
		}),
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
	],
	preview: {
		select: {
			caption: 'caption',
			media: 'image',
		},
		prepare({ caption, media }) {
			return {
				title: caption || 'Image',
				media,
			}
		},
	},
})
