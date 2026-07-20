import { defineField, defineType } from 'sanity'
import { ComposeIcon } from '@sanity/icons/Compose'

export const cardBlock = defineType({

	name: 'cardBlock',
	title: 'Card',
	type: 'object',
	icon: ComposeIcon,

	fields: [
		defineField({
			name: 'iconName',
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
