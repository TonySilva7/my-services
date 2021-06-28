import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from "./routes";
import AuthProvider from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
