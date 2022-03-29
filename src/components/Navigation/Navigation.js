import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <>
      <nav>
        <ul className={s.List}>
          <li>
            <NavLink to="/" className={s.Base}>
              <b>Главная</b>
            </NavLink>
            
            <NavLink to="/contacts" className={s.Base}>
              <b>Контакты</b>
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </>
  );
}
export default Navigation;