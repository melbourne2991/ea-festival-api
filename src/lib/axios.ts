import axios from 'axios';
import axiosRetry from 'axios-retry';
import { logger } from './logger';

export const axiosInstance = axios.create({
  headers: {
    'Accept': 'application/json'
  }
});


const backoff = (retryCount: number) => 2 ** retryCount * 100

/**
 * Apply axios retry to our instance with exponential backoff for 429s
 */
axiosRetry(axiosInstance, {
  retries: 5,
  retryDelay: (count) => backoff(count),
  retryCondition: (error) => {
    return error.response?.status === 429
  },
  onRetry: (count, err) => {
    logger.warn(`Got ${err.response?.status} from API, retrying ... (${count})`)
  }
})