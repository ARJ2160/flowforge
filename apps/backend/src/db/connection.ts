import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const client = postgres(process.env.SUPABASE_URL!);

export const db = drizzle(client);