import ProtectedLayout from "../components/layout/ProtectedLayout/ProtectedLayout";
import { ROUTE_PATH } from "../constants/routePath.constant";
import Auth from "../pages/auth";
import BookedUser from "../pages/BookedUser/screens/BookedUser";
import DashBoard from "../pages/home/screens/DashBoard";

const routes = [
  {
    path: ROUTE_PATH.ROOT.INDEX,
    element: <Auth />,
  },
  {
    path: ROUTE_PATH.HOME.INDEX,
    element: <ProtectedLayout />,
    children: [
      {
        path: ROUTE_PATH.HOME.INDEX,
        element: <DashBoard />,
      },
    ],
  },
  {
    path: ROUTE_PATH.BOOKEDUSER.INDEX,
    element: <ProtectedLayout />,
    children: [
      {
        path: ROUTE_PATH.BOOKEDUSER.INDEX,
        element: <BookedUser />,
      },
    ],
  },
  {
    path: ROUTE_PATH.NOTFOUND.INDEX,
    element: <div>Page not found</div>,
  },
];

export default routes;
