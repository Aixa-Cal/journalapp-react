import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../../auth/pages';


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route  path="/auth" element={ <LoginPage /> } />
        <Route  path="/auth" element={ <RegisterPage /> } />
    </Routes>
  )
}