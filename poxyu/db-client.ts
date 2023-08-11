import 'dotenv/config'
import postgres from 'postgres'

const DB_URL = process.env.DB_URL!

export const sql = postgres(DB_URL)
