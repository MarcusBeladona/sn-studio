/** Config da CLI Sanity (build, deploy). Mesmo projectId/dataset do sanity.config.js. */
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
	api: {
		projectId: 'zt4joqnt',
		dataset: 'production'
	},
	deployment: {
		/**
		 * Enable auto-updates for studios.
		 * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
		 */
		autoUpdates: true,
		appId: 'xmhvcl5g4yk1w609g0o5l4ff',
	}
})
