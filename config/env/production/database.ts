export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "containers-us-west-118.railway.app"),
      port: env.int("PGPORT", 7421),
      database: env("PGDATABASE", "railway"),

      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "gCv7PdIAppbEaXpzxhbN"),
      ssl: env.bool(true),
    },
  },
})
