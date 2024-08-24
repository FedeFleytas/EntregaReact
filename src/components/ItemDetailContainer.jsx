import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

import Container from 'react-bootstrap/Container';

import { ItemContext } from "../context/ItemContext";
import { ItemCount } from "./ItemCount"




export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState([true]);


    const { id } = useParams();

    const { addItem } = useContext(ItemContext);

    const onAdd = (count) => {
        addItem({ ...item, quantity: count });
    };

    useEffect (() => {
        const db= getFirestore()

        const refDoc = doc(db, "items", id);

        getDoc(refDoc)
        .then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data()})
        })
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Container className='cont'><img src="../../src/assets/loading.png" alt="" className='loading'/></Container>;
    if (item.length === 0 )
        return <Container className='mt-4 wtout'>No existe detalles de este producto</Container>;


    return (

        <Container className='mt-5'>

            <Container className='containerdetail row'>

                <Container className='imgdetail col-sm-6'>
                    <img src={item.imgurl} alt="" height={500}/>
                </Container>

                <Container className='contdetail col-sm-6'>
                        <h2>{item.name}</h2>
                        <p>{item.detail}</p>
                        <p>Stock: {item.stock}</p>
                        <p className='pricetwo'>Precio: ${item.price}</p>
                        <ItemCount stock={item.stock} onAdd={onAdd}/>
                </Container>

            </Container>

        </Container>
    )
}