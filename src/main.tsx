import './index.css';
import './mocks/browser.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { enableMockServiceWorker } from './mocks/browser.ts';
import { BrowserRouter } from 'react-router-dom';
import {CartProvider} from './providers/CartProvider/CartProvider';

enableMockServiceWorker().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <CartProvider>
          <App/>
        </CartProvider>
      </BrowserRouter>
    </React.StrictMode>,
  );
});
