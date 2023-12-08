// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import "bootstrap";
// import { AuthProvider } from './components/Authv1/AuthContext';
// import { BrowserRouter as Router } from 'react-router-dom';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </Router>
// );



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { AuthProvider } from "./components/Authv1/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ToastContainer></ToastContainer>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);