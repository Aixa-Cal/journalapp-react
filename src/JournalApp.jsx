
import { AuthRoutes } from './auth/routes/AuthRoutes'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'
import React from 'react'

export const JournalApp = () => {
  return (
    <AppTheme>
        <AppRouter />
        <AuthRoutes/>
    </AppTheme>
  )
}