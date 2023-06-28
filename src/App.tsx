import "./App.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/home";
import AccomodationPage from "./pages/accomodation/accomodation";

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
    path: "/accomodation",
    element: <AccomodationPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
