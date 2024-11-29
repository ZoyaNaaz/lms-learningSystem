import './index.css'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import App from './App.jsx';
import store from './redux/store'; 

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
          <Toaster/>
      </BrowserRouter>
  </Provider>
)
