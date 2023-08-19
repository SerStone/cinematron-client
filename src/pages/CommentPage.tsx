import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../components/Comments/Comments";

const CommentPage: FC = () => {
    return (
        <div>
            <Outlet/>
            <Comments/>
        </div>
    );
};

export {CommentPage};