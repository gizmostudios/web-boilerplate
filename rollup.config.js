import json from '@rollup/plugin-json';

export default {
    input: 'src/assets/js/app.js',
    output: {
        file: 'public/assets/js/bundle.js',
        format: 'iife',
        name: 'bundle'
    },
    plugins: [
        json()
    ]
};