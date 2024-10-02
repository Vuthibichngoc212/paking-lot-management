/// <reference types="vite-plugin-svgr/client" />
import { ROUTE_PATH } from "../constants/routePath.constant";
import overview from "./../assets/icons/overview.svg?react";
import setting from "./../assets/icons/setting.svg?react";
import spacezone from "./../assets/icons/spacezone.svg?react";
import transction from "./../assets/icons/transction.svg?react";
import usermanagement from "./../assets/icons/userbooks.svg?react";
import users from "./../assets/icons/user-manager.svg?react";

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
    path: ROUTE_PATH.USER_MANAGEMENT.INDEX,
    name: "Quản lý người dùng",
    label: "usermanagement",
    icon: users,
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
