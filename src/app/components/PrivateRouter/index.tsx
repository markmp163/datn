import { Navigate } from 'react-router-dom';
import { getToken } from '../common/common';

const PrivateRoute = ({ children }) => {
  return getToken() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
