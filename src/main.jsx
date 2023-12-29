import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './route'
import ContextHome from './context/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextHome>
      <RouterProvider router={router} />
    </ContextHome>

  </React.StrictMode>,
)
