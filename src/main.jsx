import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


//Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/global.css"

//Components
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
       <Home />
    </BrowserRouter>
   
  </StrictMode>,
);
