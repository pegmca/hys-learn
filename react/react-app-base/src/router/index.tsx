import { RouterProvider } from "react-router-dom";
import router from "./staticRouter";

function RouterView() {
  return <RouterProvider router={router} />;
}

export default RouterView;
