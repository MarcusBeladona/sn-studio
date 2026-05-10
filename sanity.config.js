import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import './static/style.css';

export default defineConfig({
	name: 'default',
	title: 'sn-studio',

	projectId: 'zt4joqnt',
	dataset: 'production',

	plugins: [structureTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
	releases: { enabled: false },
})
