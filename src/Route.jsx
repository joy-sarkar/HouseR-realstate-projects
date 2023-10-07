import { createBrowserRouter } from "react-router-dom";
import LayOut from "./LayOut";
import Services from "./Components/Services/Services";
import Home from "./Components/Home/Home";

export const router = createBrowserRouter([
  {
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
]);
