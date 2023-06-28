import "./App.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/home";
import AccommodationPage from "./pages/accommodation/accommodation";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/accommodation",
    element: <AccommodationPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
