import nunjucks from 'vite-plugin-nunjucks'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
/*ViteMinifyPlugin({}),*/

export default {
    plugins: [
        nunjucks(),
    ],
}

