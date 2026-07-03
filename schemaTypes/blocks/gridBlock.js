import { defineField, defineType } from 'sanity'
import { InlineElementIcon } from '@sanity/icons'

import { VideoIcon } from '@sanity/icons'
import { ImagesIcon } from '@sanity/icons'

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
			of: [
				{
					name: 'figure',
					type: 'object',
					icon: ImagesIcon,

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

						// FLAGS

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
				},
				{
					name: 'video',
					type: 'object',
					icon: VideoIcon,

					fieldsets: [{ name: 'flags', options: { columns: 2 } }],

					fields: [
						defineField({
							name: 'video',
							type: 'file',
							options: { accept: 'video/*' },
							validation: (rule) => rule.required(),
						}),
						defineField({
							name: 'caption',
							type: 'string',
						}),

						// FLAGS

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
								title: caption || 'Video',
								media: VideoIcon,
							}
						},
					},
				},
				{ type: 'cardBlock' }],
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
