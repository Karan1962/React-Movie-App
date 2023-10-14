import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
