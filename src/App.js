import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from 'components/AppBar';
import HomePage from 'routes/HomePage';
const Contacts = lazy(() => import('routes/Contacts'));
const Login = lazy(() => import('routes/Login'));
const Registration = lazy(() => import('routes/Registration'));
// import { useFetchContactsQuery, useDeleteContactMutation } from  'redux/contacts/contactsSlice';


export default function App() {
  // const { data: contacts, isFetching } = useFetchContactsQuery();
  // const [ deleteContact] = useDeleteContactMutation();

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

