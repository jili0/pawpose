import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../pages/Home.tsx";
import Admin from "../pages/Admin.tsx";
import About from "../pages/About.tsx";
import NotFound from "../pages/NotFound.tsx";
import Layout from "../components/Layout.tsx";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);

export default appRouter;
