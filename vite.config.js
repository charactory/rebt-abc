import nunjucks from 'vite-plugin-nunjucks'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default {
    plugins: [
        nunjucks(),
        ViteMinifyPlugin({}),
    ],
}

