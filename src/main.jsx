import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { GlobalProvider } from './Context/GlobalContext.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
<GlobalProvider>
  <AuthProvider>
  <BrowserRouter>
      <App />
</BrowserRouter>
  </AuthProvider>
</GlobalProvider>

)
