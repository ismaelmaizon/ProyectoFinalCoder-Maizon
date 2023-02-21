import React, { useContext } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/Contexto';
import style from './ItemDetail.module.css'
import { useCartContext } from '../Context/Contexto';

const ItemDetail = () => {

    const {idparams}  = useParams()

    //contexto, con esto no es necesario pasar los productos por medio de props

    const {productos} = useContext(CartContext);

    console.log(idparams);
    console.log(productos);

    const producto = productos.find(pr => {
        console.log(pr.id);
        return pr.id === idparams;
    } )

    console.log(producto);

    //unidades
    const {unidades} = useContext(CartContext);
    const {setUnidades} = useContext(CartContext);

    console.log(unidades)

    const handeldClick = ()  =>{
        setUnidades(unidades + 1)
    }

    const handeldClick2 = ()  =>{
        (unidades === 1 ) ? setUnidades(1) : setUnidades( unidades - 1 )
    }

    // añadiendo al carrito

    const {carrito} = useContext(CartContext)
    const {setCarrito} = useContext(CartContext)
    const {addProduct} = useContext(CartContext)
    const {alerta} = useContext(CartContext)

    const añadiendoACarrito =() => {
        setCarrito(addProduct(producto, carrito, unidades))
        alerta();

    }


    return(
        <div className= {style.card} >
            <img src={producto.url} alt="" className={style.card_url}/>
            <div className= {style.card_info} >
                <div className= {style.card_destalles} >
                    <h1 className= {style.card_title} >{producto.name}</h1>
                    <h2>Precio: $ {producto.precio} </h2>
                    <h2>cantidad en stock: {producto.stok}</h2>
                    <p className={style.card_description}> Descripcion: {producto.description}</p>
                </div>
                <div className= {style.btns} >
                    {/* <button onClick={alerta} >agregar</button> */}
                    <button 
                    onClick={añadiendoACarrito}
                    >Añadir a carrito</button>
                    <button onClick={handeldClick} >+</button><button onClick={handeldClick2} >-</button>
                    <h3>unidades deceadas: {unidades} </h3>
                </div>
            </div>
        </div>
    )


    


}

export default ItemDetail;
