import React from 'react';
import Navigation from 'components/Navigation';
import s from './AppBar.module.css';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { Outlet } from 'react-router-dom';

const AppBar = () => {
  return (
    <>
      <div className={s.AppBar}>
              <Navigation />
              <AuthNav />
              <UserMenu />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default AppBar;