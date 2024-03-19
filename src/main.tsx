import './index.css';
import './mocks/browser.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { enableMockServiceWorker } from './mocks/browser.ts';
// import ThemeProvider from './providers/ThemeProvider.tsx';

enableMockServiceWorker().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      {/* <ThemeProvider> */}
          <App/>
      {/* </ThemeProvider> */}
    </React.StrictMode>,
  );
});
