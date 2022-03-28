import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

function AuthNav () {
  return (
    <>
      <nav>
        <ul className={s.List}>
            <li>
            <NavLink to="/" className={s.Base}>
              <b>Регистрация</b>
            </NavLink>
                  </li>
                  <li>
            <NavLink to="/login" className={s.Base}>
              <b>Логин</b>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default AuthNav;