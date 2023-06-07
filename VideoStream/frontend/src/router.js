import Home from "./component/Home";
import Video from "./component/Video";

export default [
  {
    path: "/",
    element: () => <Home />,
    exact: true,
  },
  {
    path: "/:id",
    element: () => <Video />,
    exact: true,
  },
];
