import { useContext, useState } from "react"
import { getFirestore, addDoc, collection } from "firebase/firestore"
import { ItemContext } from "../context/ItemContext"




const initialValues = {
    phone: "",
    email: "",
    confirmEmail: "",
    name: "",
};

export const Checkout = () => {

    const [buyer, setBuyer] = useState(initialValues);
    const { items, reset } = useContext(ItemContext);


    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const handleChange = (ev) => {
        setBuyer((prev) => {
            return { ...prev, [ev.target.name]: ev.target.value };
        });
    };

    const handleOrder = async (ev) => {
        ev.preventDefault();
        
        if (buyer.email !== buyer.confirmEmail) {
            alert("Los emails no coinciden. Por favor, verifique e intente otra vez. ")
            return
        }
        const order = {
            buyer,
            items,
            total,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
    
        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("Su orden: " + id + " ha sido completada!");
                reset();
                setBuyer(initialValues);
            };
        });
    };


    return (
        <>
        <div className="formContainer">
                <form className="formulario" onSubmit={handleOrder}>
                    <div className="labelContainer">
                        <label className="tittleForm">Nombre: </label>
                        <input type="name" value={buyer.name} onChange={handleChange} name="name" required className="inputZone" placeholder="ejemplo"/>
                    </div>
                    <div className="labelContainer">
                        <label className="tittleForm">Correo: </label>
                        <input type="email" value={buyer.email} onChange={handleChange} name="email" required className="inputZone" placeholder="ejemplo@ejemplo.com"/>
                    </div>
                    <div className="labelContainer">
                        <label className="tittleForm">Confirmar Correo: </label>
                        <input type="email" value={buyer.confirmEmail} onChange={handleChange} name="confirmEmail" required className="inputZone" placeholder="ejemplo@ejemplo.com"/>
                    </div>
                    <div className="labelContainer">
                        <label className="tittleForm">Teléfono: </label>
                        <input type="tel" value={buyer.phone} onChange={handleChange} name="phone" required className="inputZone" placeholder="011 3232-3232"/>
                    </div>
                    <button type="submit" className="finishForm">Finalizar</button>
                </form>
            </div>
        </>
    )

}


