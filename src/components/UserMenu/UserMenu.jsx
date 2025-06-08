// Styles
import styles from './UserMenu.module.css';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
// Selectors
import { selectEmail } from '../../redux/auth/selectors';
// Operations
import { logout } from '../../redux/auth/operations';

export default function UserMenu() {
  const login = useSelector(selectEmail);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(logout());
  }

  return (
    <div className={styles.userNavContainer}>
      <p>Welcome, {login} !</p>
      <button onClick={handleClick} className={styles.logOutBtn}>
        Log Out
      </button>
    </div>
  );
}
