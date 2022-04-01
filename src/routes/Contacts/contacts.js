import React from 'react';
import Form from 'components/form';
import Filter from 'components/filter';
import ContactsList from 'components/contacts-list';
import Circles from 'components/spinner';
import { useFetchContactsQuery } from  'redux/contacts/contacts-operations';

function Contacts() {
  const {data: contacts, isFetching } = useFetchContactsQuery();

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