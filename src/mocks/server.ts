import { setupServer } from 'msw/node';
import { todoHandlers } from './diary/handlers';

export const server = setupServer(...todoHandlers({ delayAmount: 0 }));
