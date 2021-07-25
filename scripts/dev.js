require('esbuild')
  .serve(
    {
      servedir: 'dist'
    },
    {
      entryPoints: ['src/main.ts'],
      outdir: 'dist/js',
      bundle: true
    }
  )
  .then((server) => {
    // console.log(server)
    console.log(`运行中： http://localhost:${server.port}`)
  })
