import dotenv from 'dotenv'
dotenv.config()
import * as Path from 'node:path'
import * as URL from 'node:url'

console.log('DATABASE_URL exists:', Boolean(process.env.DATABASE_URL))
console.log(
  'DATABASE_URL starts with:',
  process.env.DATABASE_URL
    ? process.env.DATABASE_URL.substring(0, 15) + '...'
    : 'undefined',
)
const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

export default {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: Path.join(__dirname, 'dev.sqlite3'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: ':memory:',
    },
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_PUBLIC_URL,
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
  },
}
