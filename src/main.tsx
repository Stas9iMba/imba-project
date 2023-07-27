import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'antd/dist/reset.css';
import './index.css';

const root = document.querySelector('#root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
