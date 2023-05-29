import About from '@/pages/about/Index';
import Blog from '@/pages/blog/Index';
import Episodes from '@/pages/episodes/Index';
import Billing from '@/pages/manage/billing/Index';
import Home from '@/pages/manage/home/Index';
import { default as Manage } from '@/pages/manage/Index';
import Invoices from '@/pages/manage/invoices/Index';
import Site from '@/pages/manage/site/Index';
import Token from '@/pages/manage/tokens/Index';
import More from '@/pages/more/Index';
import Account from '@/pages/padcast/account/Index';
import Podcast from '@/pages/padcast/Index';
import Information from '@/pages/padcast/information/Index';
import Link from '@/pages/padcast/link/Index';
import Opus from '@/pages/padcast/opus/Index';
import Profile from '@/pages/padcast/profile/Index';
import Status from '@/pages/padcast/status/Index';
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
    path: 'Discover',
    element: <Blog />,
  },
  {
    path: 'PodcastDetail/:principal:index',
    element: <PodcastDetail />,
  },
  {
    path: 'Features',
    element: <More />,
  },

  {
    path: 'manage',
    element: <Manage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Home', element: <Home /> },
      // { path: 'Profile', element: <Profile /> },
      { path: 'My Sites', element: <Site /> },
      { path: 'Billing', element: <Billing /> },
      { path: 'Invoices', element: <Invoices /> },
      // { path: 'Password', element: <Password /> },
      { path: 'Tokens', element: <Token /> },
    ],
  },
  {
    path: 'podcast/:principal',
    element: <Podcast />,
    children: [
      { index: true, element: <Information /> },
      { path: 'information', element: <Information /> },
      { path: 'profile', element: <Profile /> },
      { path: 'episodes', element: <Opus /> },
      { path: 'account', element: <Account /> },
      { path: 'link', element: <Link /> },
      { path: 'status', element: <Status /> },
    ],
  },
];
export default function AppRouter() {
  // window.scroll(0, 0);

  return <React.Fragment>{useRoutes(routes)}</React.Fragment>;
}
