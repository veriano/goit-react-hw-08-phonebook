import React from 'react';
import Form from 'components/form';
import Filter from 'components/filter';
import ContactsList from 'components/contacts-list';
import Circles from 'components/spinner';
import { fetchContacts } from  'redux/contacts/contacts-operations';

function Contacts() {
  const {data: contacts, isFetching } = fetchContacts();

    return(
        <>
            <Form />
            <Filter />
            { isFetching && <Circles /> }
            { contacts && <ContactsList /> }
        </>
    )
}
export default Contacts;