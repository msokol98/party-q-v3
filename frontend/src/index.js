import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { QueryClientProvider, QueryClient } from "react-query";

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    },
  }
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);