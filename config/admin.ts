export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "R9Rpz88D47bYyhGGmW5I4g=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
})
