import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'//the wrapper that GIVES store access to all components


createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <App />
  </Provider>,
)


//Provider is like a WiFi router 📡 — you put it at the top (main.jsx)
//so every component in your app gets the Redux signal!
