import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import { isAuthenticated } from 'redux/auth/auth-selectors';

function AuthNav() {
  const isLoggedIn = useSelector(isAuthenticated);

  return (
    <>
      <nav>
        <ul className={s.List}>
            <li>
            <NavLink to="/registration" className={s.Base}>
              <b>Регистрация</b>
            </NavLink>
                  
            {isLoggedIn &&
              <NavLink to="/login" className={s.Base}>
                <b>Войти</b>
              </NavLink>
            }
          </li>
        </ul>
      </nav>
    </>
  );
}
export default AuthNav;