import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../pages/Loading";

const SecureRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
        return <Loading></Loading>;
    }
    if(user && user?.email){
        return children;
    }
    return (
        <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    );
};

export default SecureRoute;

SecureRoute.propTypes = {
    children: PropTypes.node
}