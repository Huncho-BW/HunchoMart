import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./navbar.css";
import "./home.css";
import "./categ.css";
import "./footer.css";
import "./productDetails.css";
import "./cart.css";
import "./checkOut.css";
import "./Leftdashbord.css";
import "./paymentMethod.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
