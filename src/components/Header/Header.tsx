import {useNavigate} from "react-router-dom";
import css from './Header.module.css'
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={css.Header}>
            <button onClick={()=>navigate('albums')}>Albums</button>
            <button onClick={()=>navigate('users')}>Users</button>
            <button onClick={()=>navigate('comments')}>Comments</button>
            <button onClick={()=>navigate('posts')}>Posts</button>
        </div>
    );
};

export {Header};