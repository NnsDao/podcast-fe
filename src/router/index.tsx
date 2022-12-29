import About from '@/pages/about/Index';
import Blog from '@/pages/blog/Index';
import Episodes from '@/pages/episodes/Index';
import Billing from '@/pages/manage/billing/Index';
import Home from '@/pages/manage/home/Index';
import { default as Account, default as Manage } from '@/pages/manage/Index';
import Invoices from '@/pages/manage/invoices/Index';
import Profile from '@/pages/manage/profile/Index';
import Site from '@/pages/manage/site/Index';
import More from '@/pages/more/Index';
import PodcastDetail from '@/pages/podcastDetail/Index';
import { Password, Token } from '@mui/icons-material';
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
  {
    path: 'account',
    element: <Account />,
  },
  {
    path: 'manage',
    element: <Manage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Home', element: <Home /> },
      { path: 'Profile', element: <Profile /> },
      { path: 'My Sites', element: <Site /> },
      { path: 'Billing', element: <Billing /> },
      { path: 'Invoices', element: <Invoices /> },
      { path: 'Password', element: <Password /> },
      { path: 'Tokens', element: <Token /> },
    ],
  },
];
export default function AppRouter() {
  // window.scroll(0, 0);

  return <React.Fragment>{useRoutes(routes)}</React.Fragment>;
}
