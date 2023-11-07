import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/Posts";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, {action as newPostAction} from "./routes/NewPost";
import RootLayout from "./routes/Rootlayout";
import Posts, { loader as postsLoader } from "./routes/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Posts />, loader: postsLoader },
      // loader is executed on hitting this route. the component is not rendered unless the
      // loader is resolved
      { path: "/create-post", element: <NewPost />, action: newPostAction },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
