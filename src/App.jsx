import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

import "./App.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { roterConfigu } from "./component/appRoute";

function App() {
  function AppRouter() {
    const route = useRoutes(roterConfigu);
    return route;
  }
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
