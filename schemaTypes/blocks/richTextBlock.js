import React from 'react'
import { DEFAULT_ANNOTATIONS, DEFAULT_DECORATORS, defineType, defineField } from 'sanity'
import { HighlightIcon } from '@sanity/icons'
import { VideoIcon } from '@sanity/icons'

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
		{ type: 'figureBlock' }, { type: 'videoBlock' }, { type: 'carouselBlock' }, { type: 'iframeBlock' },
		{ type: 'gridBlock' }, { type: 'containerBlock' },
	]
})