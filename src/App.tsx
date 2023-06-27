import "./App.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/home";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
