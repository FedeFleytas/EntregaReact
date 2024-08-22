import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { ItemContext } from '../context/ItemContext';


export const Cart = () => {
    const { reset, removeItem, items} = useContext(ItemContext);

    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    if (!items.length) return "No hay productos en el carrito";

    return (
        <Container>
            {items.map((i) => {
                return (
                    <div key={i.id}>
                    <img src={i.imgurl} alt="" width={200} />
                    <h1>{i.name}</h1>
                    <h2>{i.price}</h2>
                    <p>{i.quantity}</p>
                    <span onClick={() => removeItem(i.id)}>X</span>
                    </div>
                )
            })}
            <p>{total}</p>
            <button onClick={reset}>Vaciar Carrito</button>
            <hr />
            <Link to= {`/Checkout`} className='linkbutton'><Button className='' variant="primary">Finalizar Compra</Button></Link>
        </Container>
    )
};


