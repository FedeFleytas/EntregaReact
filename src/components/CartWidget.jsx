import { Link } from "react-router-dom";
import carrito from "../assets/cart.png";
import { useContext } from "react";

import { ItemContext } from '../context/ItemContext';




export const CartWidget = () => {

    const {items} = useContext(ItemContext);

    const total = items.reduce((acc, act) => acc + act.quantity, 0);


        return (
                <Link to="/cart" className="cartContainer">
                    <img src={carrito} height={35} />
                    <h1 className="prodtotal">{total}</h1>
                </Link>
        )

};