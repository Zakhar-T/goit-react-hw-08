// Styles
import styles from './AppBar.module.css';
import clsx from 'clsx';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
// Navigation
import { NavLink } from 'react-router';
// Selectors
import { selectEmail, selectIsLoggedIn } from '../../redux/auth/selectors';
// Operations
import { logout } from '../../redux/auth/operations';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const login = useSelector(selectEmail);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(logout());
  }

  return (
    <header className={styles.appBar}>
      <nav className={styles.appBarNav}>
        <div className={styles.appBarNavPart}>
          <NavLink
            className={({ isActive }) => {
              return clsx(
                styles.appBarNavLink,
                isActive && styles.appBarNavActiveLink,
              );
            }}
            to="/"
          >
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink
              className={({ isActive }) => {
                return clsx(
                  styles.appBarNavLink,
                  isActive && styles.appBarNavActiveLink,
                );
              }}
              to="/contacts"
            >
              Contacts
            </NavLink>
          )}
        </div>
        {!isLoggedIn ? (
          <div className={styles.appBarNavPart}>
            <NavLink
              className={({ isActive }) => {
                return clsx(
                  styles.appBarNavLink,
                  isActive && styles.appBarNavActiveLink,
                );
              }}
              to="/registration"
            >
              Registration
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return clsx(
                  styles.appBarNavLink,
                  isActive && styles.appBarNavActiveLink,
                );
              }}
              to="/login"
            >
              Log In
            </NavLink>
          </div>
        ) : (
          <div className={styles.appBarNavPart}>
            <p>Welcome, {login} !</p>
            <button onClick={handleClick} className={styles.logOutBtn}>
              Log Out
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
