import NiceModal from '@ebay/nice-modal-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'antd/dist/reset.css';
import './index.css';

const root = document.querySelector('#root');
const queryClient = new QueryClient();

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <NiceModal.Provider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </NiceModal.Provider>
    </React.StrictMode>,
  );
}
