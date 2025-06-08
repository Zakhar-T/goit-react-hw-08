import styles from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Error 404. Not found.</h1>
      <Link to="/">Home page</Link>
    </div>
  );
}
