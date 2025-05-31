import { FaPhone, FaUser } from 'react-icons/fa6';
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteContact(id));
  }

  return (
    <li className={styles.contact}>
      <div>
        <div className={styles.contactInfo}>
          <FaPhone />
          <p>{name}</p>
        </div>
        <div className={styles.contactInfo}>
          <FaUser />
          <p>{number}</p>
        </div>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
