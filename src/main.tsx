import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import { router } from './router.tsx';
import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {ThemeProvider} from "@mui/material";
import theme from "./theme.ts";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);