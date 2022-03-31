import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import s from './UserMenu.module.css';

function UserMenu() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const changeEmail = e => {
        setEmail(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logout({ email }));
        setEmail('');
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <label className={s.Base}>
                    Почта
                    <input type='email'
                        name='email'
                        onChange={ changeEmail }
                        placeholder='введите вашу почту'
                        value={ email }
                        required
                    />
                </label>
                <button className={s.Base} type='submit' >Выйти</button>
            </form>
        </>
   ) 
}
export default UserMenu;