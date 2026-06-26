/** Card com ícone Phosphor, título e descrição. Usado em richTextBlock e container. */
import { defineField, defineType } from 'sanity'
import { SparkleIcon } from '@sanity/icons'

export const cardBlock = defineType({
	name: 'card',
	type: 'object',
	icon: SparkleIcon,
	fields: [
		defineField({
			name: 'icon_name',
			type: 'string',
			title: 'Icon',
			description:
				'Phosphor icon name. Browse icons at https://icones.js.org/collection/ph',
		}),
		defineField({
			name: 'title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'description',
			type: 'text',
		}),
	],
})
