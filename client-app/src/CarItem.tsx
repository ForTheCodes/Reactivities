import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ICar } from './demo';

interface IProps {
    car: ICar
}

const CarItem: React.FC<IProps> = ({ car }) => {
    return (
        <div>
            <h1>{car.color}</h1>
        </div>
    );
}

export default CarItem;
