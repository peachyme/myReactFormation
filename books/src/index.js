import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { Provider } from "./context/BookContext";

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
    <div>
        <Provider>
            <App />
        </Provider>
    </div>
);
