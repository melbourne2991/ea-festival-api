import dotenv from 'dotenv'
import { requireEnvVar } from './lib/util';

dotenv.config()

export const config = {
  apiBaseUrl: requireEnvVar('API_BASE_URL'),
  testScenario: process.env['TEST_SCENARIO']
};