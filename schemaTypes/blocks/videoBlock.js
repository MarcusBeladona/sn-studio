import { defineField, defineType } from 'sanity'
import { VideoIcon } from '@sanity/icons/Video'

export const videoBlock = defineType({

	name: 'videoBlock',
	title: 'Video',
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
				title: caption || 'Video',
				media: VideoIcon,
			}
		},
	},
})
