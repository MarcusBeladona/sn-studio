/** Bloco de vídeo (upload) + caption. Usado no body de cases. */
import { defineField, defineType } from 'sanity'
import { PlayIcon } from '@sanity/icons'

export const videoBlock = defineType({
	name: 'videoBlock',
	title: 'Video',
	type: 'object',
	icon: PlayIcon,
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
	],
	preview: {
		select: {
			caption: 'caption',
		},
		prepare({ caption }) {
			return {
				title: caption || 'Video',
				media: PlayIcon,
			}
		},
	},
})
