import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.prod.css';
import { BrowserRouter, create, Switch, Route, useLocation } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { routes } from './routes';
import { UserProvider } from './contexts/UserContext';

const ScrollToTop = ({children}) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return children
};

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            {
              routes.map((route, key) => <Route key={key} {...route}/>)
            }
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
