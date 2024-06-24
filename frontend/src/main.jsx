import React from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './ErrorBoundary';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');

const existingRoot = rootElement._reactRootContainer;

if (existingRoot) {
  existingRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
      <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}







