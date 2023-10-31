import { terser } from 'rollup-plugin-terser';

const { terser } = require('rollup-plugin-terser');

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs', // Puedes elegir otro formato según tus necesidades
  },
  plugins: [terser()], // Este plugin minificará tu código
};