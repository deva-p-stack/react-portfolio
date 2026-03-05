import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css'
import Theme from './Components/Theme'

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter basename="/react-portfolio/">
<Theme>
  <App />
</Theme>
</BrowserRouter>
);
