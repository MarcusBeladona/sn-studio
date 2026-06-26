/**
 * Registro central de todos os schema types.
 *
 * - blocks/  → objetos reutilizáveis (page builder)
 * - documents/ → tipos de documento editáveis (case, article)
 *
 * Ao criar um tipo novo, importe e adicione ao array schemaTypes.
 */
import { cardBlock } from './blocks/cardBlock'
import { containerBlock } from './blocks/containerBlock'
import { imageBlock } from './blocks/imageBlock'
import { richTextBlock } from './blocks/richTextBlock'
import { videoBlock } from './blocks/videoBlock'
import { articleType } from './documents/articleType'
import { caseType } from './documents/caseType'

export const schemaTypes = [
	cardBlock,
	containerBlock,
	imageBlock,
	richTextBlock,
	videoBlock,
	caseType,
	articleType,
]
