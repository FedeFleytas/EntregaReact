import { useState } from "react"
import { Container } from "react-bootstrap"




const initialValues = {
    phone: "",
    email: "",
    name: "",
}

export const Checkout = () => {

    const [buyer, setBuyer] = useState(initialValues)

    const handleChange = (ev) => {
        setBuyer((prev) => {
            return { ...prev, [ev.target.name]: ev.target.value };
        });
    };

    const handleOrder = () => {
        const order = {
            buyer,
            items,
            total,
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
    
        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("Su order: " + id + " ha sido completada!");
                reset();
                setBuyer(initialValues);
            };
        });

    };



    return (
        <Container>
                <div>
                    <label>Nombre</label>
                    <input type="name" value={buyer.name} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Correo</label>
                    <input type="email" value={buyer.name} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Teléfono</label>
                    <input type="number" value={buyer.name} onChange={handleChange} required/>
                </div>
                <button>Comprar</button>
        </Container>
    )






}








