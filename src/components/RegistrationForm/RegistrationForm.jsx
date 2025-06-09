// Styles
import styles from './RegistrationForm.module.css';
// Hooks
import { useId } from 'react';
import { useDispatch } from 'react-redux';
// Formik
import { Form, Formik, Field, ErrorMessage } from 'formik';
// Validation
import * as Yup from 'yup';
// Operations
import { register } from '../../redux/auth/operations';

export default function RegistrationForm() {
  const nameField = useId();
  const emailField = useId();
  const passwordField = useId();

  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(register(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .min(3, 'Too short!')
          .max(50, 'Too long!')
          .required('Required!'),
        email: Yup.string()
          .min(3, 'Too short!')
          .max(50, 'Too long!')
          .required('Required!'),
        password: Yup.string()
          .min(8, 'Password must have at least 8 characters!')
          .required('Required!'),
      })}
    >
      <Form className={styles.registrationForm}>
        <label htmlFor={nameField}>Name</label>
        <Field
          type="input"
          name="name"
          id={nameField}
          className={styles.registrationFormInput}
        ></Field>
        <ErrorMessage
          name="name"
          component="span"
          className={styles.registrationFormError}
        />
        <label htmlFor={emailField}>Email</label>
        <Field
          type="input"
          name="email"
          id={emailField}
          className={styles.registrationFormInput}
        ></Field>
        <ErrorMessage
          name="email"
          component="span"
          className={styles.registrationFormError}
        />
        <label htmlFor={passwordField}>Password</label>
        <Field
          type="input"
          name="password"
          id={passwordField}
          className={styles.registrationFormInput}
        ></Field>
        <ErrorMessage
          name="password"
          component="span"
          className={styles.registrationFormError}
        />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
