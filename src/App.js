import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Form from './components/form';
import Filter from './components/filter';
import ContactList from './components/contacts-list';
import Circles from './components/spinner/spinner';
import HomePage from 'components/HomePage';
import { useFetchContactsQuery, useDeleteContactMutation } from  'redux/contacts/contactsSlice';


export default function App() {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [ deleteContact] = useDeleteContactMutation();

  return (
    <div>
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />

            <Route path='/contacts' element={<Form contacts={contacts} />} />

            <Route path='/contacts' element={ <Filter /> } />
                
            {isFetching && 
            <Route path='/contacts' element={ <Circles />} /> }
                
            { contacts && 
            <Route path='/contacts' element={ <ContactList 
                contacts={ contacts }
                onDeleteContact={ deleteContact }
                /> } 
            /> 
            }
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

