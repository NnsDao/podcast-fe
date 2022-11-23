import React from 'react';

import { RouteObject, useRoutes } from 'react-router-dom';
import Hello from '../components/Hello';
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Hello />,
    index: true,
  },
];
export default function AppRouter() {
  // window.scroll(0, 0);

  return <React.Fragment>{useRoutes(routes)}</React.Fragment>;
}
