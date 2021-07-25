require('esbuild').buildSync({
  entryPoints: ['src/main.ts'],
  bundle: true,
  minify: true,
  outfile: 'dist/js/main.js'
})
