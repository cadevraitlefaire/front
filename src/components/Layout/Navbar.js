import React, { useContext, useMemo, useState } from 'react';
import { Logo, Menu } from '../SVG';
import { useScroll } from '../../hooks';
import { BASE_BUTTON, Button, GRADIENT_BUTTON } from '../Button';
import { RiLock2Line, RiUser3Line} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { LOGOUT, UserContext } from '../../contexts/UserContext';
import { indexedNavbarRoutes } from '../../routes/navbar';

export const Navbar = ({ alwaysTop, neverTop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch, isLogged } = useContext(UserContext);
  const { isTop } = useScroll();
  const isOnTop = useMemo(() => alwaysTop ? true : neverTop ? false : isTop, [alwaysTop, isTop]);

  return (
    <nav id="header" className={`sticky top-0 w-full transition transition-all ease-in-out duration-700 z-30 ${ isOnTop ? 'gradient' : 'bg-white' }`}>
      <div className={`w-full transition-all duration-200 container mx-auto flex flex-wrap items-center justify-between mt-0 ${isOpen ? 'pt-2 pb-0' : 'py-2'} lg:py-2`}>

        <div className="pl-4 flex items-center">
          <Link className="no-underline hover:no-underline font-bold text-xl md:text-2xl lg:text-4xl flex" to="/">
            <div className="logo">
              <Logo/>
            </div> <span className={`my-auto ${ isOnTop ? 'text-white' : 'text-custom gradient' }`}>CADEVRAITLEFAIRE</span>
          </Link>
        </div>

        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" className="flex items-center p-1 text-orange-800 hover:text-gray-900" onClick={() => setIsOpen(!isOpen)}>
            <Menu/>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 ${ isOpen ? '' : 'hidden' }`}
          id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            {
              indexedNavbarRoutes.map((route, key) => (
                <li className="mr-3" key={key}>
                  <Link className="inline-block py-2 px-4 text-black font-bold no-underline" to={route.path}>{route.label}</Link>
                </li>
              ))
            }
            {
              isLogged ?
                <li className="mr-3">
                  <Link className="inline-block py-2 px-4 text-black font-bold no-underline" to={''} onClick={() => dispatch({type: LOGOUT})}>Déconnexion</Link>
                </li> : null
            }
          </ul>
          <Link to={isLogged ? '/profile' : '/login'}>
            <Button className="flex" Icon={isLogged ? RiUser3Line : RiLock2Line} type={isOnTop ? BASE_BUTTON : GRADIENT_BUTTON}>
              { isLogged ? 'Profil' : 'Connexion' }
            </Button>
          </Link>
        </div>
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0"/>
    </nav>
  );
};
