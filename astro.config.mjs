import { defineConfig, passthroughImageService } from "astro/config";
import vercelStatic from '@astrojs/vercel/static';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	output: 'static',
	adapter: vercelStatic(),
	image: {
		service: passthroughImageService(),
	},
	integrations: [tailwind()]
});