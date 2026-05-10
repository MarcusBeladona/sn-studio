import { createElement } from 'react'
import { defineField, defineType } from 'sanity'
import { SparkleIcon } from '@sanity/icons'

const iconesPhosphorLink = 'https://icones.js.org/collection/ph'

export const cardBlock = defineType({
	name: 'card',
	type: 'object',
	icon: SparkleIcon,
	fields: [
		defineField({
			name: 'icon_name',
			type: 'string',
			title: 'Icon',
			description: createElement(
				'a',
				{
					href: iconesPhosphorLink,
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Phosphor Icons',
			),
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
