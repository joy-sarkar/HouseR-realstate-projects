import { createBrowserRouter } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";

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
