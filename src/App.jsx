import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from './pages/UnAuthorized/FirstPage/FirstPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import ProfilePage from './pages/Authorized/ProfilePage/ProfilePage';
import ProductsPage from './pages/Authorized/ProductsPage/ProductsPage';
import ExercisesPage from './pages/Authorized/ExercisesPage/ExercisesPage';
import { useAuth } from './hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operation';
import { RestrictedRoute } from './RestrictedRoute';
import SignUp from './pages/UnAuthorized/SignUp/SignUp';
import Login from './pages/UnAuthorized/SignIn/SignIn';
import { PrivateRoute } from './PrivateRoute';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  const { isLoggedIn, isUserParams } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(refreshUser());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={isLoggedIn ? <ProfilePage /> : <FirstPage />} />
          <Route path="/welcome" element={<FirstPage />} />
          <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/profile" component={<SignUp />} />
            }
          />
          <Route
            path="/signin"
            element={
              !isUserParams ? (
                <RestrictedRoute redirectTo="/diary" component={<Login />} />
              ) : (
                <RestrictedRoute redirectTo="/profile" component={<Login />} />
              )
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/" component={<ProfilePage />} />
            }
          />
          <Route
            path="/diary"
            element={
              isUserParams ? (
                <Navigate to="/profile" replace />
              ) : (
                <PrivateRoute redirectTo="/" component={<ProfilePage />} />
              )
            }
          />
          <Route
            path="/products"
            element={
              isUserParams ? (
                <Navigate to="/profile" replace />
              ) : (
                <PrivateRoute redirectTo="/" component={<ProductsPage />} />
              )
            }
          />
          <Route
            path="/exercises"
            element={
              isUserParams ? (
                <Navigate to="/profile" replace />
              ) : (
                <PrivateRoute redirectTo="/" component={<ExercisesPage />} />
              )
            }
          ></Route>
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
