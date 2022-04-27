import PrivateRoute from './PrivateRoute';
import LogIn from '../pages/LogIn';
import HomePage from '../pages/HomePage';
import Registration from '../pages/Registration';
import {Navigate, Route, Routes} from "react-router-dom";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<HomePage />} />
        </Route>

        <Route path="login">
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="register" element={<Registration />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

export default AppRoutes;