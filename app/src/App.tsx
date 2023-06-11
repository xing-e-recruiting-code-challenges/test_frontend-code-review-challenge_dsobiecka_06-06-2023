import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {BrowserRouter} from 'react-router-dom';

import AppRoutes from './AppRoutes';
import ArticlesContextProvider from 'context/articles/ArticleContext';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ArticlesContextProvider>
          <AppRoutes />
        </ArticlesContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
