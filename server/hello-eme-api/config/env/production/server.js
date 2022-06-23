module.exports = ({ env }) => ({
  proxy: true,
  url: env('MY_HEROKU_URL'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ["placeholderKey1","placeholderKey1"])
  },
})
