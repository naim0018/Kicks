import About from "../pages/Public/About/About";
import Contact from "../pages/Public/Contact/Contact";
import Services from "@/pages/Public/Services/Services";
import Home from "@/pages/Public/Home/Home";
import TableDemo from "@/pages/TableDemo";
import FormDemo from "@/pages/FormDemo";
import ProductDetails from "@/pages/Public/ProductDetails/ProductDetails";
import Cart from "@/pages/Public/Cart/Cart";

export const publicRoutes = [
  {
    label: "Home",
    index: true,
    path: "/",
    element: <Home />,
  },
  {
    label: "Product Details",
    path: "/product-details/:id",
    element: <ProductDetails />,
  },
  {
    label: "Cart",
    path: "/cart",
    element: <Cart />,
  },
  {
    label: "About",
    path: "/about",
    element: <About />,
    children: [
      {
        label: "About 2",
        path: "about2",
        element: <About />,
      },
      {
        label: "About 3",
        path: "about3",
        element: <About />,
      },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    label: "Services",
    path: "/services",
    element: <Services />,
  },
  {
    label: "Table Demo",
    path: "/table-demo",
    element: <TableDemo />,
  },
  {
    label: "Form Demo",
    path: "/form-demo",
    element: <FormDemo />,
  },
];
