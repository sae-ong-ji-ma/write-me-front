import axios from 'axios';
import { enableMapSet } from 'immer';

export default async function initializeApp() {
    enableMapSet();

    if (import.meta.env.DEV) {
        const { worker } = await import('./mocks');

        return worker.start();
    } else {
        axios.defaults.baseURL = 'http://some.api.url';
    }
}
