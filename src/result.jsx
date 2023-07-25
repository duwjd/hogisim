import React from "react";
import ReactDOMClient from "react-dom/client";
import { DicDaumNetByHtml } from "./DicDaumNetByHtml";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DicDaumNetByHtml />);
