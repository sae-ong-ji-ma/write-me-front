import { setupWorker } from 'msw/browser';
import { todoHandlers } from './diary/handlers';

export const worker = setupWorker(...todoHandlers({ delayAmount: 200 }));
