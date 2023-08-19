import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {IUser} from "../interfaces/user.interface";
import {useAppLocation} from "../hooks/router.hooks";
import {UserDetails} from "../components/Users/UsersDetails";
import {userService} from "../services/user.service";

const UserDetailedPage: FC = () => {
    const {id} = useParams();
    const {state} = useAppLocation<IUser>();
    // @ts-ignore
    const [user, setUser] = useState<IUser>(null);

    useEffect(() => {
        if (!state){
            // @ts-ignore
            userService.getById(id).then(value => value.data).then(value => setUser(value));
        }else {
            setUser(state)
        }
    }, [id, state])
    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export {UserDetailedPage};