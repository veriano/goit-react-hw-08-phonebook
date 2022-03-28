import React from 'react';
import AppBar from 'components/AppBar';
import Form from './components/form';
import Filter from './components/filter';
import ContactList from './components/contacts-list';
import Circles from './components/spinner/spinner';
import { useFetchContactsQuery, useDeleteContactMutation } from  'redux/contacts/contactsSlice';


export default function App() {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [ deleteContact] = useDeleteContactMutation();

  return (
    <div>
      <AppBar />

      <Form contacts={ contacts }/>

      <Filter />
      
      {isFetching && <Circles />}
      
      { contacts && 
      <ContactList 
      contacts={ contacts }
      onDeleteContact={ deleteContact }
      /> }
    </div>
  );
}

