import { enableMapSet } from 'immer';

export default function initializeApp() {
    enableMapSet();

    // if (import.meta.env.PROD) {
    //   // GA 관련 초기화
    //   ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID, { gaOptions: {} });

    //   const history = createBrowserHistory();
    //   history.listen(async (response) => {
    //     ReactGA.send({ hitType: 'pageview', page: response.location.pathname });
    //   });

    //   // Airbridge 관련 초기화
    //   airbridge.init({
    //     app: import.meta.env.VITE_AIRBRIDGE_NAME,
    //     webToken: import.meta.env.VITE_AIRBRIDGE_WEB_TOKEN,
    //   });
    // }
}
