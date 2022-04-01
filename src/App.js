import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import AppBar from 'components/AppBar';
import HomePage from 'routes/HomePage';
import { getCurrentUser }  from 'redux/auth/auth-operations';
import { isAuthenticated } from 'redux/auth/auth-selectors';
const Contacts = lazy(() => import('routes/Contacts'));
const Login = lazy(() => import('routes/Login'));
const Registration = lazy(() => import('routes/Registration'));


export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isAuthenticated);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />

            {isLoggedIn ?
              <Route path='/contacts' element={<Contacts />} /> 
              :
              <Route render={() => <Navigate to="/login" />} />
            }
              
            <Route path='/registration' element={<Registration />} />
            
            <Route path='/login' element={<Login />} />
            
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

