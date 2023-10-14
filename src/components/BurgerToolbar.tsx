import React, {FC} from 'react';
import './BurgerMenu.css';
import {Genres} from "./GenresMapping";

const BurgerToolbar: FC = () => {
    return (
        <div>
            <nav className="main-nav hamburger-menu">

                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>


                <ul className="menu__box">
                    <li>
                        <Genres/>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export {BurgerToolbar};