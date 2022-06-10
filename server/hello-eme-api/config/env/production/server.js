module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env('PORT', '8000'),
  app: {
    keys: env.array('APP_KEYS', ["placeholderKey1","placeholderKey1"]),
  },
});
