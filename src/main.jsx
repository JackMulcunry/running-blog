import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import { TempoDevtools } from "tempo-devtools";
import routes from "tempo-routes";
import App from "./App.jsx";
import "./App.css";

// Initialize Tempo Devtools
TempoDevtools.init();

function AppWithRouting() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  // Tempo routes - only render when VITE_TEMPO is true
  const tempoRoutes = import.meta.env.VITE_TEMPO ? useRoutes(routes) : null;

  if (tempoRoutes) {
    return tempoRoutes;
  }

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<App />} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWithRouting />
  </React.StrictMode>,
);
