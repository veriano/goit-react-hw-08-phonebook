import { useState } from 'react';
import PropTypes from 'prop-types';
// import Notiflix from 'notiflix';
// import { useAddContactMutation } from 'redux/contacts/contactsSlice';
import s from './login.module.css';
// import { useFetchContactsQuery } from  'redux/contacts/contactsSlice';



export default function Form() {
//   const { data: users } = useFetchContactsQuery();

//   const [addContact] = useAddContactMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = event => {
    setEmail(event.target.value);
  };

  const changePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    //   const checkedForEmail = users.find(user => user.email !== user.email);
    //   const checkForPassword = users.find(user => user.password !== user.password);

    // if (checkedForEmail && checkForPassword) {
    //   Notiflix.Notify.info(`Вы не правильно ввели логин или пароль`);
    //   setEmail('');
    //   setPassword('');
    //   return;
    // }

    setEmail('');
    setPassword('');

  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
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
        Войти
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};


