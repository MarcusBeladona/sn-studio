import { ALL_FIELDS_GROUP, defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
import { DocumentsIcon } from '@sanity/icons'

export const caseType = defineType({

	type: 'document',
	name: 'case',
	icon: DocumentsIcon,

	orderings: [orderRankOrdering],

	groups: [
		{ name: 'content', default: true },
		{ name: 'options' },
		{ ...ALL_FIELDS_GROUP, hidden: true },
	],

	fieldsets: [{ name: 'flags', options: { columns: 2 } }],

	fields: [

		// CONTENT

		orderRankField({ type: 'case' }),
		defineField({
			name: 'title',
			type: 'string',
			validation: (rule) => rule.required(),
			group: 'content',
		}),
		defineField({
			name: 'description',
			type: 'text',
			rows: 2,
			validation: (rule) => rule.required(),
			group: 'content',
		}),
		defineField({
			name: 'tags',
			type: 'array',
			of: [{ type: 'string' }],
			options: { layout: 'tags' },
			group: 'content',
		}),
		defineField({
			name: 'release',
			type: 'date',
			initialValue: () => new Date().toISOString().split('T')[0],
			group: 'content',
		}),
		defineField({
			name: 'body',
			type: 'array',
			group: 'content',
			of: [
				{ type: 'image' },
				{ name: 'video', type: 'file', options: { accept: 'video/*' }, },
				{
					type: 'object',
					name: 'iframe',
					fields: [
						{
							name: 'url',
							type: 'url'
						}
					],
					preview: {
						prepare() {
							return {
								title: 'Iframe',
							}
						}
					}
				},
			],
		}),
		defineField({
			name: 'related',
			type: 'array',
			of: [{
				type: 'reference',
				to: [{ type: 'case' }, { type: 'article' }],
			}],
			group: 'content',
		}),

		// OPTIONS

		defineField({
			name: 'bookmark',
			type: 'boolean',
			initialValue: false,
			group: 'options',
			fieldset: 'flags',
		}),
		defineField({
			name: 'visible',
			type: 'boolean',
			initialValue: true,
			group: 'options',
			fieldset: 'flags',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: { source: 'title', isUnique: isUniqueOtherThanLanguage, },
			validation: (rule) => rule.required(),
			group: 'options',
		}),
		defineField({
			name: 'thumb',
			type: 'image',
			options: { hotspot: true },
			group: 'options',
		}),

		defineField({
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true,
			group: 'options',
		})
	],

	// PREVIEW

	preview: {
		select: {
			title: 'title',
			media: 'thumb',
		},
	},
})

// Function to check if another document of the same type AND language uses this slug
export async function isUniqueOtherThanLanguage(slug, context) {
	const { document, getClient } = context;
	if (!document?.language) {
		return true;
	}

	const client = getClient({ apiVersion: '2026-04-01' });
	const id = document._id.replace(/^drafts\./, '');

	const query = `!defined(*[_type == $type && language == $language && slug.current == $slug && _id != $id && !(_id in path("drafts.**"))][0]._id)`;

	const params = {
		type: document._type,
		language: document.language,
		slug: slug,
		id: id,
	};

	return await client.fetch(query, params);
}