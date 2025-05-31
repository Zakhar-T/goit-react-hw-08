import { useId } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

export default function ContactForm() {
  const nameField = useId();
  const numberField = useId();
  const dispatch = useDispatch();

  function handleAdd(values, actions) {
    dispatch(addContact(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleAdd}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .min(3, 'Too short!')
          .max(50, 'Too long!')
          .required('Required!'),
        number: Yup.string()
          .length(9, 'Number must have 9 characters!')
          .required('Required!'),
      })}
    >
      <Form className={styles.contactForm}>
        <label htmlFor={nameField}>Name</label>
        <Field
          type="input"
          name="name"
          id={nameField}
          className={styles.contactFormInput}
        ></Field>
        <ErrorMessage
          name="name"
          component="span"
          className={styles.contactFormError}
        />
        <label htmlFor={numberField}>Number</label>
        <Field
          type="input"
          name="number"
          id={numberField}
          className={styles.contactFormInput}
        ></Field>
        <ErrorMessage
          name="number"
          component="span"
          className={styles.contactFormError}
        />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
