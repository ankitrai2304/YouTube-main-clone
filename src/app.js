import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import VideoPage from "./components/VideoPage";
import ChannelPage from "./components/ChannelPage";
import Footer from "./components/Footer";
import { PageProvider } from "./utils/activePage";
import SearchFeed from "./components/SearchFeed";

const AppLayout = () => {
  return (
    <div className="container text-white bg-black w-screen overflow-hidden ">
      <PageProvider>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </PageProvider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/video/:id",
        element: <VideoPage />,
      },
      {
        path: "/channel/:id",
        element: <ChannelPage />,
      },
      {
        path: "/search/:searchTerm",
        element: <SearchFeed />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
