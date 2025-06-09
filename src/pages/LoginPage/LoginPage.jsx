// Styles
import styles from './LoginPage.module.css';
// Components
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <main>
      <h1 className={styles.title}>Log in</h1>
      <LoginForm />
    </main>
  );
}
