import { createHashRouter, RouterProvider } from "react-router-dom";
import { ElementPortfolio } from "./screens/ElementPortfolio";
import { HeaderScreen } from "./screens/HeaderScreen";

const router = createHashRouter([
  {
    path: "/",
    element: <ElementPortfolio />,
  },
  {
    path: "/xl28px-u45-portfolio-template",
    element: <ElementPortfolio />,
  },
  {
    path: "/header",
    element: <HeaderScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
