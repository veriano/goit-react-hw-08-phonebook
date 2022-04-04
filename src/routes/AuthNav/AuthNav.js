import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

function AuthNav() {

  return (
    <>
      <nav>
        <ul className={s.List}>
            <li>
            <NavLink to="/registration" className={s.Base}>
              <b>Регистрация</b>
            </NavLink>
                  
            <NavLink to="/login" className={s.Base}>
              <b>Войти</b>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default AuthNav;