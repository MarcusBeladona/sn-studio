import { cardBlock } from './blocks/cardBlock'
import { carouselBlock } from './blocks/carouselBlock'
import { containerBlock } from './blocks/containerBlock'
import { diffBlock } from './blocks/diffBlock'
import { figureBlock } from './blocks/figureBlock'
import { gridBlock } from './blocks/gridBlock'
import { iframeBlock } from './blocks/iframeBlock'
import { richTextBlock } from './blocks/richTextBlock'
import { videoBlock } from './blocks/videoBlock'

import { articleType } from './documents/articleType'

export const schemaTypes = [
	cardBlock,
	gridBlock,
	figureBlock,
	richTextBlock,
	videoBlock,
	iframeBlock,
	carouselBlock,
	containerBlock,
	diffBlock,

	articleType,
]
