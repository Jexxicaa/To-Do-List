
//Where the React app starts and gets connected to the HTML file

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Gets the element with id="root" from the HTML document and creates a root.
// This sets up a place/root where the entire React app will be rendered.
createRoot(document.getElementById('root')).render(
  
  // <StrictMode> is a tool that helps find potential problems in your app.
  
  // It doesn't affect how the app works, so you can ignore it for now.
  // <App /> is the main component of the app like the central hub where all other components will be placed and rendered (where all the smaller components are assembled)
  
  <StrictMode>
    <App />
  </StrictMode>,
)

