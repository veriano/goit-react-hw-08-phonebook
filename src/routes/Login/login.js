import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './login.module.css';
import { login } from 'redux/auth/auth-operations';


export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');

  }

  return (
    <div>
     <h1>Страница логина</h1> 
      <form onSubmit={handleSubmit} className={s.form}>
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
          Войти
        </button>
        </form>

    </div>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};


