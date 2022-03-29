import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
// import { useAddContactMutation } from 'redux/contacts/contactsSlice';
import s from './registration.module.css';
// import { useFetchContactsQuery } from  'redux/contacts/contactsSlice';

export default function Form() {
//   const { data: contacts } = useFetchContactsQuery();

//   const [addContact] = useAddContactMutation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeName = event => {
    setName(event.target.value);
  };

  const changeEmail = event => {
    setEmail(event.target.value);
  };
    
  const changePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const checkedForName = users.find(user => name.toLowerCase() === user.name.toLowerCase());

    // if (checkedForName) {
    //   Notiflix.Notify.info(`Пользователь с именем ${name.toLowerCase()} уже зарегистрирован`);
    //     setName('');
    //     setEmail('');
    //     setPassword('');
    //   return;
    // }

    // createUser({ name, email, password })
      
    setName('');
    setEmail('');
    setPassword('');
      

    Notiflix.Notify.success('Вы успешно зарегистрировались!');
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
      <label className={s.label}>Почта</label>
      <input
        className={s.input}
        type="email"
        name="email"
        required
        value={email}
        onChange={changeEmail}
       />
       <label className={s.label}>Пароль</label>
       <input
        className={s.input}
        type="password"
        name="password"
        required
        value={password}
        onChange={changePassword}
       />
       <button type="submit" className={s.btn}>
        Подтвердить
       </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.object),
};


