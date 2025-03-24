import { lazy } from 'react';

// Lazy load pages for better performance
const Index = lazy(() => import('./pages/Index'));
const Blog = lazy(() => import('./pages/Blog'));
const Project = lazy(() => import('./pages/Project'));
const Post = lazy(() => import('./pages/Post'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Timeline = lazy(() => import('./pages/Timeline'));
const About = lazy(() => import('./pages/About'));

export const routes = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/project/:id',
    element: <Project />,
  },
  {
    path: '/post/:id',
    element: <Post />,
  },
  {
    path: '/timeline',
    element: <Timeline />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]; 