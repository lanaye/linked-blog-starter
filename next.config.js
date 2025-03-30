module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  outputFileTracingIncludes: "{.next,*.cache,node_modules,public,app}/**"
}
