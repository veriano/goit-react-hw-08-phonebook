import { useSelector, useDispatch } from 'react-redux';
import s from './contactsList-styles.module.css';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';


export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

   const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
    const filtered = contacts ? getVisibleContacts(contacts) : [];

  return (
    <ul className={s.list}>
      {filtered && filtered.map(({ name, number, id }) => {
        return (
          <li key={id} className={s.item}>
            <p className={s.p}>
              {name} <span className={s.span}>{number}</span>
            </p>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={s.btn}
            >
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
}




