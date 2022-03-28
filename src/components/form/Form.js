import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { useAddContactMutation } from 'redux/contacts/contactsSlice';
import s from './form-styles.module.css';


export default function Form({ contacts }) {
  const [addContact] = useAddContactMutation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const changeName = event => {
    setName(event.target.value);
  };

  const changeNumber = event => {
    setPhone(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const checkedForName = contacts.find(contact => name.toLowerCase() === contact.name.toLowerCase());

    if (checkedForName) {
      Notiflix.Notify.info(`${name.toLowerCase()} is already in contacts`);
      setName('');
      setPhone('');
      return;
    }

    addContact({ name, phone })
      
    setName('');
    setPhone('');

    Notiflix.Notify.success('Contact has been created!');
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>Name</label>
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
      <label className={s.label}>Number</label>
      <input
        className={s.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={phone}
        onChange={changeNumber}
      />
      <button type="submit" className={s.btn}>
        Add to contacts
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};


