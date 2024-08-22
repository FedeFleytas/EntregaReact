import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import { getFirestore, getDocs, where, query, collection } from 'firebase/firestore';


export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([true]);

    const { id } = useParams();

    useEffect (() => {

        const db= getFirestore()

        const refCollection = !id ? collection(db, "items") : query( collection(db, "items"), where("category", "==", id)); 

        getDocs(refCollection)
            .then((snapshot) => {
                setItems(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data()};
                    })
                );
            })
            .finally(() => setLoading(false));
    }, [id]);


    if (loading) return <Container className='cont'><img src="../../src/assets/loading.png" alt="" className='loading'/></Container>;


    return(
        <Container className='mt-4'>
            <h1 className='prodc'>Productos</h1>
            <Container className='mt-4 row conter'>
                {items.map((i) => (
                    <Card key={i.id} style={{ width: '18rem' }} className='col-sm-6 m-2'>
                        <Card.Img variant="top" src={i.imgurl} height={250} width={200} className='pt-3 cardimg'/>
                        <Card.Body className='cards'>
                            <Card.Title>{i.name}</Card.Title>
                            <Card.Text>
                                {i.detail}
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
