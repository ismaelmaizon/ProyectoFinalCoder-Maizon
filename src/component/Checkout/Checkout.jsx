import React, { useContext, useState } from 'react'
import { db } from '../../../db/firebase-config';
import { collection, addDoc } from 'firebase/firestore';



import style from './Checkout.module.css'
import { CartContext } from '../Context/Contexto'
import { async } from '@firebase/util';

const Checkout = () => {
    const {total} = useContext(CartContext)
    const {carrito} = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")

    // funcion comprar

    const orderCollection = collection( db, "ordenes" );

    const order = {
        comprador: {
            nombre: {nombre}, 
            email: {email},
            telefono: {telefono},
            direccion: {direccion}
        }, 
        items: carrito.map(product => ({ id: product.id, name: product.name, unidades: product.unidades, precio: product.precio})),
        total: total
    }

    const handelClickComprar = async (e) => {
        e.preventDefault();
        await addDoc(orderCollection, order)
        .then(({id})=> console.log(id));
    }



    return (
    <div className= {style.container} >
        <h1>Checkout</h1>
        <form onSubmit={handelClickComprar} >
            <div>
                <label>Ingrese Nombre Completo: </label>
                <input 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text" />
            </div>

            <div>
                <label>Telefono: </label>
                <input 
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                type="text" />
            </div>

            <div>
                <label>Direcion: </label>
                <input 
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                type="text" />
            </div>


            <div>
                <label>Email: </label>
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text" />
            </div> 

            <button type='submit' >Comprar</button>
            
        </form>

    </div>
  )
}

export default Checkout
