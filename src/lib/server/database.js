import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const pool = new Pool({
  connectionString: process.env.PGCONNECT,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, // for production
});

export default {
  query: (text, params) => pool.query(text, params),
};
