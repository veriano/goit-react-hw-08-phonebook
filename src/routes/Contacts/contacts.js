import React from 'react';
import { useSelector } from 'react-redux';
import Form from 'components/form';
import Filter from 'components/filter';
import ContactsList from 'components/contacts-list';
import Circles from 'components/spinner';
import { getIsLoading, getContacts } from 'redux/contacts/contacts-selectors';

function Contacts() {
    const contacts = useSelector(getContacts);
    const isFetching = useSelector(getIsLoading);

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