export default {
  input: './src/main.js',
  output: [
    {
      format: 'umd',
      name: 'zypUtils',
      file: 'build/zyp.umd.bundle.js'
    },
    {
      format: 'cjs',
      file: 'build/zyp.cjs.bundle.js'
    },
    {
      format: 'amd',
      file: 'build/zyp.amd.bundle.js'
    },
    {
      format: 'es',
      file: 'build/zyp.es.bundle.js'
    },
    {
      format: 'iife',
      name: 'zypUtils',
      file: 'build/zyp.iife.bundle'
    }
  ]
}