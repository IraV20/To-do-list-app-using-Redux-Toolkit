import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { Layout } from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const TasksPage = lazy(() => import('../../pages/TasksPage/TasksPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  if (isRefreshing) {
    return null;
  }

  return (
    <div className={css.app}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RestrictedRoute component={<RegisterPage/>} />}/>
            <Route path="/login" element={<RestrictedRoute component={<LoginPage/>}/>} />
            <Route path="/tasks" element={<PrivateRoute component={<TasksPage/>}/>} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}
