import { createClient } from '@connect2ic/core';
import { AstroX, ICX, InternetIdentity, NFID } from '@connect2ic/core/providers';
import '@connect2ic/core/style.css';
import { Connect2ICProvider } from '@connect2ic/react';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { isDev } from './common/helper';
import GlobalStateProvider from './hooks/globalState';
import { UserStoreProvider } from './hooks/userStore';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3e4,
      refetchOnWindowFocus: !isDev,
      cacheTime: Infinity,
      retry: false,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root')!);
const client = createClient({
  // providers: defaultProviders,
  providers: [
    (window as any).icx
      ? new ICX({
          // providerUrl: "https://ccmhe-vqaaa-aaaai-acmoq-cai.raw.ic0.app/",
          // providerUrl: "http://localhost:8080/",
          delegationModes: ['global'],
          customDomain: 'http://localhost:3008',
        })
      : new AstroX({
          // providerUrl: "https://ccmhe-vqaaa-aaaai-acmoq-cai.raw.ic0.app/",
          // providerUrl: "https://63k2f-nyaaa-aaaah-aakla-cai.raw.ic0.app/",
          providerUrl: 'http://localhost:3000',
          delegationModes: ['global'],
          customDomain: 'http://localhost:3008',
        }),
    //  new PlugWallet(),
    new InternetIdentity(),
    new NFID(),
  ],
  globalProviderConfig: {
    // appId:'kokoko',
    // host: 'http://localhost:3001',
    // dev: import.meta.env.DEV,
    dev: true,
    // ledgerHost: "http://localhost:8000",
    // delegationModes:['global'],
    whitelist: ['qhbym-qaaaa-aaaaa-aaafq-cai', 'ryjl3-tyaaa-aaaaa-aaaba-cai'],
  },
});
root.render(
  <React.StrictMode>
    <CssBaseline></CssBaseline>
    <QueryClientProvider client={queryClient}>
      <UserStoreProvider>
        <GlobalStateProvider>
          <Connect2ICProvider client={client}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Connect2ICProvider>
          <Toaster></Toaster>
        </GlobalStateProvider>
      </UserStoreProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
