import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { ItemContext } from '../context/ItemContext';


export const Cart = () => {
    const { reset, removeItem, items} = useContext(ItemContext);

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    

    if (!items.length) return (
        <div className='zeroContainer'>
            <p className='withoutProd'>No hay productos en el carrito</p>
        </div>
    )

    return (
        <Container className='containerCart'>
            <div className='cartTittleContainer'>
                <h1 className='cartTittle'>Carrito</h1>
            </div>
            {items?.map((i) => {
                return (
                    <div key={i.id}>
                        <div className='infoContainer'>
                            <img src={i.imgurl} alt="" className='prodImg'/>
                            <h2 className='prodinfoname'>{i.name}</h2>
                            <h3 className='prodinfoprice'>${i.price}</h3>
                            <p className='prodinfoquantity'>Cantidad: {i.quantity}</p>
                            <p onClick={() => items?.length && removeItem(i.id)} className='delete'>X</p>
                            <hr  className='separate'/>
                        </div>
                    </div>
                )
            })}
            <div className='buttonsContainer'>
                <p className='total'>Total: ${total}</p>
                <hr  className='separates'/>
                <div className='buttons'>
                    <button onClick={reset} className='empty linkbutton' variant="primary">Vaciar Carrito</button>
                    <Link to= {`/Checkout`} className='linkbutton'><Button className='finish' variant="primary">Finalizar Compra</Button></Link>
                </div>
            </div>
        </Container>
    )
};


