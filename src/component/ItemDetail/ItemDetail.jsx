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

    //contador
    const [contador, setContador] = useState(0)

    const handeldClick = ()  =>{
        setContador(contador + 1)
    }

    const handeldClick2 = ()  =>{
        (contador === 0 ) ? setContador(0) : setContador( contador - 1 )
    }

    // añadiendo al carrito

    const {carrito} = useContext(CartContext)
    const {setCarrito} = useContext(CartContext)

    console.log("carro: ", carrito);

    



    return(
        <div className= {style.card} >
            <img src={producto.url} alt="" className={style.card_url}/>
            <div className= {style.card_info} >
                <div className= {style.card_destalles} >
                    <h1 className= {style.card_title} > Nombre del producto: {producto.name}</h1>
                    <p className={style.card_description}> Descripcion: {producto.description}</p>
                    <h2>cantidad en stock: {producto.stok}</h2>
                </div>
                <div className= {style.btns} >
                    <button 
                    onClick={() => setCarrito(producto)}
                    >Añadir a carrito</button>
                    <button onClick={handeldClick} >+</button><button onClick={handeldClick2} >-</button>
                    <h3>unidades deceadas: {contador} </h3>
                </div>
            </div>
        </div>
    )


    


}

export default ItemDetail;
