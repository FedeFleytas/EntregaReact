import { useList } from '../hooks/useList';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import data from "../data/products.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemListContainer = () => {
    
    const { items, loading } = useList (data);


    if (loading) return <Container className='cont'><img src="../../src/assets/loading.png" alt="" className='loading'/></Container>;
    if (items.length === 0 )
        return <Container className='mt-4'><div className='wtout'>No hay productos</div></Container>;
    return(
        <Container className='mt-4'>
            <h1 className='prodc'>Productos:</h1>
            <Container className='mt-4 row conter'>
                {items.map((i) => (
                    <Card key={i.id} style={{ width: '18rem' }} className='col-sm-6 m-2'>
                        <Card.Img variant="top" src={i.imgurl} height={200} className='pt-3 cardimg'/>
                        <Card.Body className='cards'>
                            <Card.Title>{i.name}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Text className='price'>
                                ${i.price}
                            </Card.Text>
                            <div className='contbutton'>
                                <Link to= {`/item/${i.id}`} className='linkbutton'><Button className='buttonl' variant="primary">Detalles</Button></Link>
                            </div>
                        </Card.Body>
                    </Card>
                )) }
            </Container>
        </Container>
    )
};
