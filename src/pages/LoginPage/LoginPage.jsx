// Styles
import styles from './LoginPage.module.css';
// Hooks
import { useId } from 'react';
// Formik
import { Form, Formik, Field, ErrorMessage } from 'formik';
// Validation
import * as Yup from 'yup';

export default function LoginPage() {
  const emailField = useId();
  const passwordField = useId();

  function handleSubmit() {
    return;
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .min(3, 'Too short!')
          .max(50, 'Too long!')
          .required('Required!'),
        password: Yup.string()
          .min(8, 'Password must have at least 8 characters!')
          .required('Required!'),
      })}
    >
      <Form className={styles.loginForm}>
        <label htmlFor={emailField}>Email</label>
        <Field
          type="input"
          name="email"
          id={emailField}
          className={styles.loginFormInput}
        ></Field>
        <ErrorMessage
          name="email"
          component="span"
          className={styles.loginFormError}
        />
        <label htmlFor={passwordField}>Password</label>
        <Field
          type="input"
          name="password"
          id={passwordField}
          className={styles.loginFormInput}
        ></Field>
        <ErrorMessage
          name="password"
          component="span"
          className={styles.loginFormError}
        />
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
