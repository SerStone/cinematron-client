import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux.hooks";
import {carActions} from "../redux";
import {Car} from "./Car";

import css from './Car.module.css';

const Cars: FC = () => {
    const {cars, trigger} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch, trigger])

    return (
        <div className={css.Cars}>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};