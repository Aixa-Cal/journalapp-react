import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../journal/pages/HomePage";
import { LoginPage, RegisterPage } from "../auth/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/auth/pages/login" element={<LoginPage />} />
      <Route exact path="/auth/pages/register" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />

    </Routes>
  );
};
