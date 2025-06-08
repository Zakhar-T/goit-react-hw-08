// Styles
import styles from './AuthNav.module.css';
import clsx from 'clsx';
// Navigation
import { NavLink } from 'react-router';

export default function AuthNav() {
  return (
    <div className={styles.authNavContainer}>
      <NavLink
        className={({ isActive }) => {
          return clsx(styles.authNavLink, isActive && styles.authNavActiveLink);
        }}
        to="/registration"
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return clsx(styles.authNavLink, isActive && styles.authNavActiveLink);
        }}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
}
