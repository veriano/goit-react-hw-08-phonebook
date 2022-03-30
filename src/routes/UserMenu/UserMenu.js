import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import s from './UserMenu.module.css';

function UserMenu() {
    const dispatch = useDispatch();

    return (
        <>
            <form>
                <label className={s.Base}>
                    Почта
                    <input type='email' name='email' placeholder='введите вашу почту' required/>
                </label>
                <button className={s.Base} type='button' onClick={ () => dispatch(logout()) } >Выйти</button>
            </form>
        </>
   ) 
}
export default UserMenu;