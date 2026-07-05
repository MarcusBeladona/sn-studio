import { cardBlock } from './blocks/cardBlock'
import { figureBlock } from './blocks/figureBlock'
import { gridBlock } from './blocks/gridBlock'
import { iframeBlock } from './blocks/iframeBlock'
import { richTextBlock } from './blocks/richTextBlock'
import { videoBlock } from './blocks/videoBlock'
import { articleType } from './documents/articleType'
import { caseType } from './documents/caseType'

export const schemaTypes = [
	cardBlock,
	gridBlock,
	figureBlock,
	richTextBlock,
	videoBlock,
	iframeBlock,
	caseType,
	articleType,
]
