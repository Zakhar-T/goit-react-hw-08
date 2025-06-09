// Styles
import styles from './UserMenu.module.css';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
// Selectors
import { selectUser } from '../../redux/auth/selectors';
// Operations
import { logout } from '../../redux/auth/operations';

export default function UserMenu() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(logout());
  }

  return (
    <div className={styles.userNavContainer}>
      <p>Welcome, {user.email} !</p>
      <button onClick={handleClick} className={styles.logOutBtn}>
        Log Out
      </button>
    </div>
  );
}
