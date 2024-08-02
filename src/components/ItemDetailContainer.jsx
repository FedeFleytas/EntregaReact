import { useDetail } from '../hooks/useDetail';

import Container from 'react-bootstrap/Container';
import data from "../data/products.json"




export const ItemDetailContainer = () => {
    
    const { item, loading } = useDetail (data);

    if (loading) return <Container className='cont'><img src="../../src/assets/loading.png" alt="" className='loading'/></Container>;
    if (item.length === 0 )
        return <Container className='mt-4 wtout'>No existe detalles de este producto</Container>;


    return (

        <Container className='mt-4'>
            <h1 className='tittledetail'>{item.category}</h1>

            <Container className=' mt-4 containerdetail row'>

                <Container className='imgdetail col-sm-6'>
                    <img src={item.imgurl} alt="" height={500}/>
                </Container>

                <Container className='contdetail col-sm-6'>
                        <h2>{item.name}</h2>
                        <p>{item.detail}</p>
                </Container>

            </Container>

        </Container>
    )
}