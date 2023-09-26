import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "antd/dist/reset.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";
import AuthContextProvider from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
