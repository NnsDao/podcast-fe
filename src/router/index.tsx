import About from '@/pages/about/Index';
import Blog from '@/pages/blog/Index';
import Episodes from '@/pages/episodes/Index';
import More from '@/pages/more/Index';
import PodcastDetail from '@/pages/podcastDetail/Index';
import React from 'react';

import { RouteObject, useRoutes } from 'react-router-dom';
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Episodes />,
    index: true,
  },
  {
    path: 'Episodes',
    element: <Episodes />,
    index: true,
  },
  {
    path: 'About',
    element: <About />,
  },
  {
    path: 'Blog',
    element: <Blog />,
  },
  {
    path: 'PodcastDetail',
    element: <PodcastDetail />,
  },
  {
    path: 'More',
    element: <More />,
  },
];
export default function AppRouter() {
  // window.scroll(0, 0);

  return <React.Fragment>{useRoutes(routes)}</React.Fragment>;
}
