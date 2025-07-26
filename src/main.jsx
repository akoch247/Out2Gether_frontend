import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './auth/AuthContext.jsx';
import { ApiProvider } from './api/ApiContext.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </AuthProvider>
  </StrictMode>,
);
