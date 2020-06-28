import { Login } from '../components/pages';
import { Home } from '../components/pages/Home';

export const BUTTON_LINK = 'button';

export const linkedNavbarRoutes = [];

export const navbarRoutes = [
  ...linkedNavbarRoutes,
  {
    component: Login,
    path: '/login',
    linkType: BUTTON_LINK,
    type: BUTTON_LINK
  },
  {
    component: Home,
    path: '/'
  },
];
