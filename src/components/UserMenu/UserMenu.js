import React from 'react';
// import { NavLink } from 'react-router-dom';
import s from './UserMenu.module.css';

function UserMenu() {
    return (
        <>
            <form>
                <label className={s.Base}>
                    email
                    <input type='email' name='email' placeholder='your email'/>
                </label>
                <button className={s.Base} type='submit'>Logout</button>
            </form>
        </>
   ) 
}
export default UserMenu;