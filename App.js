import ReactDOM from "react-dom/client";
import { lazy, Suspense, useState, useEffect } from "react";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const Grocery = lazy(() => import("./src/components/Grocery"));
import UserContext from "./src/utils/UserContext";

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    //api call , get username
    const newName = " Srini";
    setUserName(newName);
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ userName: userName, setUserName }}>
        <Header />

        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading Groceries</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
