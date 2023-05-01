import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { AuthRoutes } from './auth/routes/AuthRoutes'
import { JournalRoutes } from './journal/routes/JournalRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
     <AppRouter />
     <AuthRoutes/>
     <JournalRoutes/>

    </BrowserRouter>
  
  </React.StrictMode>,
)
