import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './contexts/auth';
import AllRoutes from './routes';
import GlobalStyle from './styles/GlobalStyles';

function App() {
	return (
		<AuthProvider>
			<GlobalStyle />
			<ToastContainer autoClose={3000} className='toast-container' />
			<BrowserRouter>
				<AllRoutes />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
