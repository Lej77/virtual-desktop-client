
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import zip from 'rollup-plugin-zip';

export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'es',
        compact: true,
    },
    plugins: [
        // Handle typescript:
        typescript({
            //module: 'CommonJS',
            // removeComments: true, //Only for typescript (".ts") files.
            exclude: ["TestJavaScriptClient/**/*"]
        }),
        // Handle code imported from node modules:
        nodeResolve(),
        // The code generated by protoc uses commonjs import style, we need this to correctly include the `google-protobuf` package's code:
        commonjs({ extensions: ['.js', '.ts'] }), // the ".ts" extension is required
        // Minify code (about 20% smaller):
        terser(),
        zip({ file: "deno-client.zip" }),
    ],
};