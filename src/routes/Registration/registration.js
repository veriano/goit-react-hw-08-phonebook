import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './registration.module.css';
import { register } from 'redux/auth/auth-operations';

export default function Registration() {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
      
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
  <div>
    <h1>Страница регистрации</h1>

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
        onChange={handleChange}
      />
      <label className={s.label}>Почта</label>
      <input
        className={s.input}
        type="email"
        name="email"
        required
        value={email}
        onChange={handleChange}
       />
       <label className={s.label}>Пароль</label>
       <input
        className={s.input}
        type="password"
        name="password"
        required
        value={password}
        onChange={handleChange}
       />
       <button type="submit" className={s.btn}>
        Зарегистрироваться
       </button>
      </form>

  </div>
  );
}

Registration.propTypes = {
  onSubmit: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.object),
};


