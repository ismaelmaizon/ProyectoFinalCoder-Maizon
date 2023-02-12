import React, { useContext, useState } from 'react'
import { db } from '../../../db/firebase-config';
import { collection, addDoc } from 'firebase/firestore';

// Sweetalert2
import Swal from 'sweetalert2'



import style from './Checkout.module.css'
import { CartContext } from '../Context/Contexto'
import { async } from '@firebase/util';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const {total} = useContext(CartContext)
    const {carrito} = useContext(CartContext)
    const {setCarrito} = useContext(CartContext)    
    const {setTotalProd} = useContext(CartContext)   
    const {setTotal} = useContext(CartContext)   




    const navigate = useNavigate()



    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [idCompra, setIdCompra] = useState("")

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
        .then(({id})=> {
            console.log(id);
            setIdCompra(id);
        });
    }


    console.log("id de compra: " + idCompra);

    const comprar = () => {

        Swal.fire({
            title: 'Confirmar la compra',
            showDenyButton: true,
            //showCancelButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Su compra se realizo con exito pronto nos contactaremos', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })

        
    }

    const volver = () => {
        setCarrito([]);
        setTotalProd(0);
        setTotal(0);
        navigate("/");
    }

    
    return (
    <div className= {style.container} >
        <h1>Checkout</h1>
        <form onSubmit={handelClickComprar}  >
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
            <button type='submit' onClick={comprar} >Comprar</button>        
        </form>

        <div className=''>
            <h1>Comprobante de compra: {idCompra}</h1>
            <Link to="/" >
             <button onClick={volver} >volver</button>            
            </Link>
        </div>


    </div>
  )
}

export default Checkout;
