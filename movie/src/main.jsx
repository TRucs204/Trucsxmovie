import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/login.jsx";
import SignIn from "./component/signIn.jsx";
import Profile from "./component/Profile.jsx";
import { CheckProvider } from "./component/checkUser.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CheckProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="Login" element={<Login />}></Route>
          <Route path="SignIn" element={<SignIn />} />
          <Route path="Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </CheckProvider>
  </StrictMode>
);
