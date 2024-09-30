import ProtectedLayout from "../components/layout/ProtectedLayout/ProtectedLayout";
import { ROUTE_PATH } from "../constants/routePath.constant";
import Auth from "../pages/auth";
import PakingSpace from "../pages/BookedUser/screens/PakingSpace";
import DashBoard from "../pages/home/screens/DashBoard";
import HomePage from "../pages/HomePage/screens/HomePage";
import SpaceZone from "../pages/spaceZone/screens/SpaceZone";

const routes = [
  {
    path: ROUTE_PATH.ROOT.INDEX,
    element: <Auth />,
  },
  {
    path: ROUTE_PATH.HOMEPAGE.INDEX,
    element: <HomePage />,
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
    path: ROUTE_PATH.SPACEZONE.INDEX,
    element: <ProtectedLayout />,
    children: [
      {
        path: ROUTE_PATH.SPACEZONE.INDEX,
        element: <SpaceZone />,
      },
    ],
  },
  {
    path: ROUTE_PATH.BOOKEDUSER.INDEX,
    element: <ProtectedLayout />,
    children: [
      {
        path: ROUTE_PATH.BOOKEDUSER.INDEX,
        element: <PakingSpace />,
      },
    ],
  },
  {
    path: ROUTE_PATH.NOTFOUND.INDEX,
    element: <div>Page not found</div>,
  },
];

export default routes;
