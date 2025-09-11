import * as dotenv from 'dotenv';
import { resolve } from 'path';

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: resolve(process.cwd(), `.env.${env}`) });

export const config = {
  baseUrl: process.env.BASE_URL || '',
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || ''
};
