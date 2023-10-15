import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { Suspense } from "react";
import { lazy } from 'react';


import Layout from "./Layout";
import Home from "./pages/Home";
import Loading from "./components/loading/Loading";

const Resume = lazy(() => import('./pages/Resume'));
const ErrorPage = lazy(() => import('./components/error/Error'));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />} errorElement={<ErrorPage />} path="/">
            <Route path="/" element={<Home />} />
            <Route path="/resume/:ca_id"  element={<Resume />} />
        </Route>
    )
);

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
