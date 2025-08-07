import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <div>home</div> },
      { path: "shop", element: <div>Shop</div> },
      { path: "categories", element: <div>Categories</div> },
      { path: "contacts", element: <div>Contacts</div> },
    ],
  },
]);
