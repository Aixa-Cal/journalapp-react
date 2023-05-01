import React from 'react'
import { HomePage } from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';

export const JournalRoutes = () => {
  return (

   <Routes>
      <Route path="home" element={<HomePage />} />
   </Routes>
  )
}
