import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from "./contexts/auth";
import AllRoutes from "./routes";

function App () {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoClose={ 3000 }/>
        <AllRoutes/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
