import nodeResolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import rollVue from 'rollup-plugin-vue';
import rollJson from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		nodeResolve({
      extensions: ['.js', '.vue'],
      preferBuiltins: true,
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'node_modules/quasar/quasar.common.js': [ 'Quasar' ]
      }
    }), // tells Rollup how to find blocksley in node_modules
    globals(),
    builtins({crypto:true}),
    commonjs(), // converts blocksley to ES modules
    rollVue(/* VuePluginOptions */),
    rollJson(),
    postcss({
      extensions: [ '.css', '.styl' ],
      plugins: []
    }),
		production && terser() // minify, but only in production
	]
};