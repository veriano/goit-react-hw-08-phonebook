import React from 'react';
// import { useSelector } from 'react-redux';
// import authSelectors from 'redux/auth/auth-selectors';
import Navigation from 'components/Navigation';
import s from './AppBar.module.css';
import AuthNav from 'routes/AuthNav';
import UserMenu from 'routes/UserMenu';
import { Outlet } from 'react-router-dom';

const AppBar = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

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