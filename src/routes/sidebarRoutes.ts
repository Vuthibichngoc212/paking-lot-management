/// <reference types="vite-plugin-svgr/client" />
import { ROUTE_PATH } from "../constants/routePath.constant";
import overview from "./../assets/icons/overview.svg?react";
import setting from "./../assets/icons/setting.svg?react";
import map from "./../assets/icons//map_space.svg?react";
import spacezone from "./../assets/icons/spacezone.svg?react";
import transction from "./../assets/icons/transction.svg?react";
import usermanagement from "./../assets/icons/userbooks.svg?react";

export const sidebarRoutes = [
  {
    path: ROUTE_PATH.HOME.INDEX,
    name: "Tổng quan",
    label: "Dashboard",
    icon: overview,
    children: [],
  },
  {
    path: ROUTE_PATH.SPACEZONE.INDEX,
    name: "Quản lý bãi đỗ",
    label: "spacezone",
    icon: spacezone,
    children: [],
  },
  {
    path: ROUTE_PATH.BOOKEDUSER.INDEX,
    name: "Quản lý toàn bộ bãi đỗ",
    label: "usermanagement",
    icon: usermanagement,
    children: [],
  },
  {
    path: ROUTE_PATH.PARKING.INDEX,
    name: "Chỗ đậu xe",
    label: "map",
    icon: map,
    children: [],
  },
  {
    path: ROUTE_PATH.TRANSACTION.INDEX,
    name: "Giao dịch",
    label: "transction",
    icon: transction,
    children: [],
  },
  {
    path: ROUTE_PATH.SETTING.INDEX,
    name: "Cài đặt",
    label: "setting",
    icon: setting,
    children: [],
  },
];
