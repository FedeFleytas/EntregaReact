import { useDetail } from '../hooks/useDetail';

import Container from 'react-bootstrap/Container';
import data from "../data/products.json"




export const ItemDetailContainer = () => {
    
    const { item, loading } = useDetail (data);

    if (loading) return <Container className='cont'><img src="../../src/assets/loading.png" alt="" className='loading'/></Container>;
    if (item.length === 0 )
        return <Container className='mt-4'>No existe detalles de este producto</Container>;


    return (

        <Container className='mt-4'>
            <h1>Producto</h1>

            <Container className='mt-4 col-sm'>
                <img src="{item.img}" alt="" />
            </Container>
            <Container className='mt-4 col-sm'>
                    <h2>{item.name}</h2>
                    <p>{item.detail}</p>
                </Container>
        </Container>
    )
}