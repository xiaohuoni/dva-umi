const APIV1 = '/api/v1'

module.exports = {
  name: 'oni-dva-umi-demo',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  api: {
    users: `${APIV1}/users`
  },
}
