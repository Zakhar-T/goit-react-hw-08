// Styles
import styles from './Navigation.module.css';
import clsx from 'clsx';
// Hooks
import { useSelector } from 'react-redux';
// Navigation
import { NavLink } from 'react-router-dom';
// Selectors
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={styles.navContainer}>
      <NavLink
        className={({ isActive }) => {
          return clsx(styles.navLink, isActive && styles.navActiveLink);
        }}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => {
            return clsx(styles.navLink, isActive && styles.navActiveLink);
          }}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}
