import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import Category from "./pages/Category";
import CategoryMenu from "./pages/CategoryMenu";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <CategoryMenu /> },
        {
          path: "/:category",
          element: <Category />,
        },
      ],
    },
  ]);
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
