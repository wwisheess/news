import React, { createContext, useContext } from 'react';
const ApiKeyContext = createContext();

export function ApiKeyProvider({ children }) {
  const API_KEY = 'UKzi6Rswc80AcVZHR2uPHbb1JwKSp8UC';

  return (
    <ApiKeyContext.Provider value={API_KEY}>{children}</ApiKeyContext.Provider>
  );
}

export function useApiKey() {
  return useContext(ApiKeyContext);
}
