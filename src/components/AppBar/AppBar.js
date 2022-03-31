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
  // console.log(isLoggedIn);

  return (
    <>
      <div className={s.AppBar}>
        {/* { isLoggedIn ? <UserMenu /> : <AuthNav /> } */}
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