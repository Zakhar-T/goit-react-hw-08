// Styles
import styles from './ContactsPage.module.css';
// Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
// Selectors
import { selectError, selectLoading } from '../../redux/contacts/selectors';
// Operations
import { fetchContacts } from '../../redux/contacts/operations';

export default function ContactsPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={styles.contactsPage}>
      <h1 className={styles.contactsTitle}>Contacts</h1>
      <div className={styles.contactsContainer}>
        <div className={styles.contactsWrapper}>
          <ContactForm />
          <SearchBox />
          {loading && (
            <p className={styles.message}>Loading data, please wait...</p>
          )}
          {error && (
            <p className={styles.message}>Oops... Something went wrong...</p>
          )}
        </div>
        <ContactList />
      </div>
    </main>
  );
}
