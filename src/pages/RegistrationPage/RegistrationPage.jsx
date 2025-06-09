// Styles
import styles from './RegistrationPage.module.css';
// Components
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegistrationPage() {
  return (
    <main>
      <h1 className={styles.title}>Registration</h1>
      <RegistrationForm />
    </main>
  );
}
