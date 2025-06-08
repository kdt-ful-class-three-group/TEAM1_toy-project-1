import 'dotenv/config';
import { Pool } from 'pg';

if (!process.env.DB_URL) {
    throw new Error('DB_URL 환경변수가 설정되어 있지 않습니다.');
}

export const pool = new Pool({
    connectionString: process.env.DB_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});