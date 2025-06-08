// Components
import Layout from '../Layout/Layout';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
// Navigation
import { Route, Routes } from 'react-router';
// Actions
import { useDispatch, useSelector } from 'react-redux';
// Optimization
import { lazy, Suspense, useEffect } from 'react';
// Selectors
import { selectIsRefreshing } from '../../redux/auth/selectors';
// Operations
import { refreshUser } from '../../redux/auth/opeations';
// Pages
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage'),
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage'),
);
// const NotFoundPage = lazy(() =>
//   import('../../pages/NotFoundPage/NotFoundPage'),
// );

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (!isRefreshing)
    return (
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/registration"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Suspense>
      </Layout>
    );
}
