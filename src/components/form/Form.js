import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import s from './form-styles.module.css';
import { addContact } from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';



export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeName = event => {
    setName(event.target.value);
  };

  const changeNumber = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts) {
      const checkForName = contacts.find(contact => name.toLowerCase() === contact.name.toLowerCase());
      const checkForNumber = contacts.find(contact => contact.number === number);

      if (checkForName) {
        Notiflix.Notify.failure(`${name.toLowerCase()} уже существует в книге контактов`);
        setName('');
        setNumber('');
        return;
      }

      if (checkForNumber) {
        Notiflix.Notify.failure('Контакт с таким номером телефона уже существует в книге контактов');
        setName('');
        setNumber('');
        return;
      }
    }

    dispatch(addContact({ name, number }));
      
    setName('');
    setNumber('');

    Notiflix.Notify.success('Контакт успешно создан!');
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>Имя</label>
      <input
        className={s.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={changeName}
      />
      <label className={s.label}>Номер телефона</label>
      <input
        className={s.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={number}
        onChange={changeNumber}
      />
      <button type="submit" className={s.btn}>
        Добавить контакт
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};


