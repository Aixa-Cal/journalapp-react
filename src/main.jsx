import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { AuthRoutes } from "./auth/routes/AuthRoutes";
import { JournalRoutes } from "./journal/routes/JournalRoutes";
import { Provider } from "react-redux";
import { store } from "./store/";
// import { JournalApp } from "./JournalApp";
// import { JournalPage } from "./journal/pages/JournalPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
        <AuthRoutes />
        {/* <JournalApp/> */}
        <JournalRoutes />
        {/* <JournalPage/> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
