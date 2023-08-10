import React from "react";
import ReactDOMClient from "react-dom/client";
import { AccountSetup } from "./screens/AccountSetup";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AccountSetup />);
