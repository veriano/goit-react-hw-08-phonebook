import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { isAuthenticated } from 'redux/auth/auth-selectors';

function Navigation() {
  const isLoggedIn = useSelector(isAuthenticated);

  return (
    <>
      <nav>
        <ul className={s.List}>
          <li>
            <NavLink to="/" className={s.Base}>
              <b>Главная</b>
            </NavLink>
            
            {isLoggedIn &&
              <NavLink to="/contacts" className={s.Base}>
                <b>Контакты</b>
              </NavLink>
            }
          </li>
          
        </ul>
      </nav>
    </>
  );
}
export default Navigation;