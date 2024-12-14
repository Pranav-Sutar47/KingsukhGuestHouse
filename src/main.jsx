import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tooltip/dist/react-tooltip.css'
import { ToastContainer,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <div>
  <App />
  <ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  transition={Bounce}
/>
</div>
)
