import { Home, Login, Search } from '../components/pages';

export const indexedNavbarRoutes = [
  {
    component: Search,
    path: '/search',
    label: 'Recherche',
  },
];

export const navbarRoutes = [
  ...indexedNavbarRoutes,
  {
    component: Login,
    path: '/login',
  },
  {
    component: Home,
    path: '/',
  },
];
