import React from 'react';
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

