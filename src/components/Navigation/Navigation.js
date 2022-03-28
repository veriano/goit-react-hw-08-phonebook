import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <>
      <nav>
        <ul className={s.List}>
          <li className={s.login}>
            <NavLink to="/" className={s.Base}>
              <b>Главная</b>
            </NavLink>
          
            <NavLink to="/" className={s.Base}>
              <b>Заметки</b>
            </NavLink>
            </li>
            <li>
            <NavLink to="/" className={s.Base}>
              <b>Регистрация</b>
            </NavLink>
          
            <NavLink to="/login" className={s.Base}>
              <b>Логин</b>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navigation;