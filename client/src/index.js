import './index.css';
import App from './App';
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

// Routeların çalışması için <App /> öğesini düzenlemeniz gerekir
ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
document.getElementById('root'));


