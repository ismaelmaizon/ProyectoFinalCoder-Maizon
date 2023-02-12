import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/Contexto';
import style from './Carrito.module.css';


const Carrito = () => {


    // carrit
    const {carrito} = useContext(CartContext)
    const {total} = useContext(CartContext)
    const {contador} = useContext(CartContext)
    const {handelClickCompra} = useContext(CartContext)



    console.log(carrito);

    useEffect(() => {
        contador()
    }, [])


  return (
    
    <div className={style.container}>
        <div className={style.carrito} >
            <div className={style.carritoTitle} >Carrito</div>
            <div className= {style.carritoCantidad} >
                <h3>Precio</h3> <h3>Cantidad</h3>
            </div>
            <div className={style.carritoProductos} >
                <div>
                    {carrito.map((prod) => {
                        return (
                            <div className={style.prod} >
                                <div>{prod.name}</div>
                                <div>{prod.unidades}</div>
                                <div>{prod.precio}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={style.carritoTotal} >
                <p>Total</p><p>$ {total}</p>
            </div>
            <div className={style.btns} >
                <button className={style.btn}>Cancelar compra</button>
                <button className={style.btn} onClick={handelClickCompra}  >Comprar</button>
            </div>
        </div>
    </div>



       
    
  )
}

export default Carrito;

