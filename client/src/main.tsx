import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import {QueryClient, QueryClientProvider} from "react-query";
import {ToastContainer} from "react-toastify";
import axios from "axios";

export const backUrl = import.meta.env.VITE_BACK_URL
axios.defaults.baseURL = backUrl;

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <NextUIProvider>
            <QueryClientProvider client={queryClient}>
                <App/>
                <ToastContainer/>
            </QueryClientProvider>
        </NextUIProvider>
    </StrictMode>,
)
