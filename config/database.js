module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'db-mysql-nyc1-66382-do-user-11446913-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'strapiv4-msql-do'),
      user: env('DATABASE_USERNAME', 'strapiv4-msql'),
      password: env('DATABASE_PASSWORD', 'AVNS_15F6Bqs13lowzVT'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
