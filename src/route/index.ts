import React from "react";
import auth from "@/wrappers/auth";

/**
 * 路由文件
 */
export interface IRoute {
  path: string;
  exact?: boolean;
  component?: React.ComponentType<any>;
  routes?: IRoute[];
  wrappers?: React.ComponentType<any>[];
  title?: string;
  redirect?: string;
  hide?: boolean;
  icon?: any;
}

export const routes: IRoute[] = [
  {
    path: "/",
    exact: true,
    title: "home页面",
    // redirect: "/home",
    component: React.lazy(() => import("@/view/Home")),
    wrappers: [auth],
  },
  {
    path: "/home",
    exact: true,
    title: "home页面",
    component: React.lazy(() => import("@/view/Home")),
    wrappers: [auth],
  },
  {
    path: "/index",
    exact: true,
    title: "index页面",
    component: React.lazy(() => import("@/view/Index")),
    wrappers: [auth],
  },
  {
    path: "/404",
    exact: true,
    title: "404页面",
    component: React.lazy(() => import("@/view/404")),
    wrappers: [auth],
  },
  {
    path: "/login",
    exact: true,
    title: "login页面",
    component: React.lazy(() => import("@/view/Login")),
  },
];
