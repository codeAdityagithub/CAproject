import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import { Suspense } from "react";
import Loading from "./components/loading/Loading";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />} path="/">
            <Route path="/" element={<Home />} />
            <Route path="/resume/:ca_id" element={<Resume />} />
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
