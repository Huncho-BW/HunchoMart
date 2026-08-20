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
import "./Confirmation.css";
import "./setting.css";
import "./signUp.css";
import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthenticatonContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.jsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
);
