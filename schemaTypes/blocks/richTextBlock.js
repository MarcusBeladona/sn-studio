import { DEFAULT_ANNOTATIONS, DEFAULT_DECORATORS, defineType } from 'sanity'
import React from 'react'
import { HighlightIcon } from '@sanity/icons'

const HighlightDecorator = (props) => {
	return React.createElement(
		'span',
		{
			style: {
				backgroundColor: '#877731',
				color: 'black',
			}
		},
		props.children
	)
}

export const richTextBlock = defineType({

	name: 'richTextBlock',
	type: 'array',
	of: [
		{
			type: 'block',
			marks: {
				decorators: [
					...DEFAULT_DECORATORS,
					{
						value: 'highlight',
						title: 'Highlight',
						icon: HighlightIcon,
						component: HighlightDecorator
					},
				],
				annotations: [
					...DEFAULT_ANNOTATIONS,
				]
			}
		},
		{ type: 'figureBlock' }, { type: 'videoBlock' }, { type: 'gridBlock' }, { type: 'cardBlock' }
	]
})