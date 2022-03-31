import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AppBar from 'components/AppBar';
import HomePage from 'routes/HomePage';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
const Contacts = lazy(() => import('routes/Contacts'));
const Login = lazy(() => import('routes/Login'));
const Registration = lazy(() => import('routes/Registration'));
// import { useFetchContactsQuery, useDeleteContactMutation } from  'redux/contacts/contactsSlice';



export default function App() {
  // const { data: contacts } = useFetchContactsQuery();
  // const [ deleteContact] = useDeleteContactMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />

            <Route path='/contacts' element={<Contacts />} />

            <Route path='/registration' element={<Registration />} />
            
            <Route path='/login' element={<Login />} />
            
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

