import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import { tempoDevtools } from "tempo-devtools";
import routes from "tempo-routes";
import App from "./App.jsx";
import "./App.css";

// Initialize Tempo Devtools
tempoDevtools.init();

function AppWithRouting() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  // If VITE_TEMPO is set (dev mode), use Tempo routes
  const tempoRoutes = import.meta.env.VITE_TEMPO ? useRoutes(routes) : null;

  if (tempoRoutes) {
    return tempoRoutes;
  }

  // ✅ Always show App component in production
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<App />} />
    </Routes>
  );
}

// Mount app to DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWithRouting />
  </React.StrictMode>
);
