import { StrictMode } from "react";
import {
  createBrowserHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { routeTree } from "./routeTree.gen";

import "./App.css";

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const router = createRouter({ routeTree, history: createBrowserHistory() });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
    </StrictMode>
  );
}
