import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (contacts.length > 0)
    return (
      <ul className={styles.contactList}>
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </ul>
    );
}
