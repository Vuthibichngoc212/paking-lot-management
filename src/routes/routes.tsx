import { RouteObject } from "react-router-dom";
// import ProtectedLayout from "../components/layout/ProtectedLayout/ProtectedLayout";
import { ROUTE_PATH } from "../constants/routePath.constant";
// import SignInScreen from "../pages/auth/Login/screens/SignInScreen";
import Auth from "../pages/auth";

const routes: RouteObject[] = [
  {
    path: ROUTE_PATH.ROOT.INDEX,
    // element: <SignInScreen />,
    element: <Auth />,
  },

  // {
  //   path: ROUTE_PATH.HOME.INDEX,
  //   element: <ProtectedLayout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Home />,
  //     },
  //   ],
  // },

  {
    path: ROUTE_PATH.NOTFOUND.INDEX,
    element: <div>Page not found</div>,
  },
];

export { routes };
