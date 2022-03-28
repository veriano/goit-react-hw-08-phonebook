import React from 'react';
import Navigation from 'components/Navigation';
import s from './AppBar.module.css';
import AuthNav from 'component/Navigation';
import { Outlet } from 'react-router-dom';

const AppBar = () => {
  return (
    <>
      <div className={s.AppBar}>
        <Navigation />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default AppBar;