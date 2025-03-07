import "./App.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/appRouter.jsx";
import AnimalContextProvider from "./contexts/AnimalContextProvider.tsx";

const App = () => {
  return (
    <AnimalContextProvider>
      <RouterProvider router={appRouter} />
    </AnimalContextProvider>
  );
};
export default App;
