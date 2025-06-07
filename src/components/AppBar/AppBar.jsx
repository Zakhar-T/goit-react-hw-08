import styles from './AppBar.module.css';
import { NavLink } from 'react-router';

export default function AppBar() {
  return (
    <header className={styles.appBar}>
      <nav className={styles.appBarNav}>
        <div className={styles.appBarNavPart}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
        <div className={styles.appBarNavPart}>
          <NavLink to="/registration">Registration</NavLink>
          <NavLink to="/login">LogIn</NavLink>
        </div>
      </nav>
    </header>
  );
}
