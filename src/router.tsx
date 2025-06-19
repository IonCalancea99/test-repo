// router.tsx
import { createBrowserRouter } from 'react-router-dom';
import {AppLayout} from './layout/AppLayout';
import {AppDiscovery} from "./pages/Discovery.tsx";
// import Home from './pages/Home';
// import About from './pages/About';
// import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />, // layout component (includes header/sidebar etc.)
        children: [
            { index: true, element: <AppDiscovery /> }, // equivalent to path: ""
            // { path: 'about', element: <About /> },
            // { path: '*', element: <NotFound /> },
        ],
    },
]);
