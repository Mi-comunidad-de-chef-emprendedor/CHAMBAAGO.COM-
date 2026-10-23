import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL no está configurada. Añádela al entorno antes de arrancar la app.')
}

export const pool = new Pool({ connectionString: databaseUrl })
export const db = drizzle(pool, { schema })
