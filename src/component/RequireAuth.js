import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useLocalState } from './util/useLocalState';
import { useLocalUser } from './util/useLocalUser';
import {ROLES} from "../App";

const RequireAuth = ({ allowedRoles }) => {
    
    const [user, setuser] = useLocalUser('','access_token')
    const location = useLocation();

    // return (
    //     auth?.roles?.find(role => allowedRoles?.includes(role))
    //         ? <Outlet />
    //         : auth?.user
    //             ? <Navigate to="/unauthorized" state={{ from: location }} replace />
    //             : <Navigate to="/login" state={{ from: location }} replace />
    // );

    if(allowedRoles.includes(ROLES[user])){
        console.log(ROLES[user] +"is in"+ allowedRoles);
        return <Outlet />
    }else{
        console.log(ROLES[user] +"is not in"+ allowedRoles);
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    // return (
    //     auth?.user
    //         ? <Outlet />
    //         : <Navigate to="/login" state={{ from: location }} replace />
    // );

}

export default RequireAuth;