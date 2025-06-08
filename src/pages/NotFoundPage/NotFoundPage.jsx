import { Link } from 'react-router';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Error 404. Not found.</h1>
      <Link to="/">Home page</Link>
    </div>
  );
}
