import React, {FC} from 'react';

import {carActions} from "../redux";
import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";

import css from './Car.module.css';

interface IProps {
    car: ICar
}

const Car:FC<IProps> = ({car}) => {

    const {id, brand, price, year} = car;
    const dispatch = useAppDispatch();
    const scrollFunc = () => {
        const scrollDuration = 300;
        const scrollStep = -window.scrollY / (scrollDuration / 15);

        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))&&scrollFunc()}>update</button>
            <button onClick={() => dispatch(carActions.deleteCar({id}))&&scrollFunc()}>delete</button>
        </div>
    );
};

export {Car};