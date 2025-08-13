import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'
import Body from './components/Body'
// import Cart from './components/Cart'
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Grocery = lazy(() => import('./components/Grocery'));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={appRouter} />

);
