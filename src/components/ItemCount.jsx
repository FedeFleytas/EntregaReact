import { useState } from "react";

export const ItemCount = ( {onAdd, stock} ) => {
    const [count, setCount] = useState(1)


    const handleIncrease = () => {
        if(count < stock) {
            setCount(prev => prev + 1);
        }
    };
    
    const handleDecrease = () => {
        if(count > 1) {
            setCount(prev => prev - 1);
        }
    };

    const handleAdd = () => {
        onAdd(count);
        setCount(1);
    }

    return(
        <div className="countContainer">
            <div>
            <button onClick={handleDecrease} className="handleButton">-</button>
            <span>{count}</span>
            <button onClick={handleIncrease} className="handleButton">+</button>
            </div>
        <hr className="separate"/>
        <button onClick={handleAdd} className="addCart">Agregar al carrito</button>
        </div>
    );
};