import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Users} from "../components/Users/Users";

const UsersPage: FC = () => {
    return (
        <div>
            <Outlet/>
            <Users/>
        </div>
    );
};

export {UsersPage};