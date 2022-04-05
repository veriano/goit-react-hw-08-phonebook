import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getUserEmail } from 'redux/auth/auth-selectors';
import s from './UserMenu.module.css';

function UserMenu() {
    const dispatch = useDispatch();
    const email = useSelector(getUserEmail);
    

    return (
        <>
            <span className={ s.BaseEmail }>{email}</span>
            <button className={s.Base} type='button' onClick={ () => dispatch(logout()) }>Выйти</button>
        </>
   ) 
}
export default UserMenu;