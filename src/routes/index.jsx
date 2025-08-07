import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <div>Shop</div> },
      { path: "categories", element: <div>Categories</div> },
      { path: "contacts", element: <div>Contacts</div> },
    ],
  },
]);
