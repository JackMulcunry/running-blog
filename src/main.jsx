import React from "react";
import ReactDOM from "react-dom/client"; // ✅ For React 18
// import ReactDOM from "react-dom";      // ✅ Uncomment for React 17
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import { tempoDevtools } from "tempo-devtools";
import routes from "tempo-routes";
import App from "./App.jsx";
import "./App.css";

// Init devtools (safe in prod too)
tempoDevtools.init();

function AppWithRouting() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const tempoRoutes = import.meta.env.VITE_TEMPO ? useRoutes(routes) : null;
  if (tempoRoutes) return tempoRoutes;

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<App />} />
    </Routes>
  );
}

// ✅ Mount with React 18
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
