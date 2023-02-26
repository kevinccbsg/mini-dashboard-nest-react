import { Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import { ROUTES } from './constants/routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME_PAGE}
        element={<Users />}
      />
    </Routes>
  );
}

export default AppRoutes;
