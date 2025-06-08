// Styles
import styles from './AppBar.module.css';
// Hooks
import { useSelector } from 'react-redux';
// Selectors
import { selectIsLoggedIn } from '../../redux/auth/selectors';
// Components
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.appBar}>
      <nav className={styles.appBarNav}>
        <Navigation />
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </nav>
    </header>
  );
}
