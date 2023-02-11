import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/Contexto';
import style from  './CardProducts.module.css';

const CardProducts = () => {
    

    //contexto

    const {productos} = useContext(CartContext)
    const {ordenes} = useContext(CartContext)


    console.log( productos)
    console.log (ordenes)


    const ord = () => {
        console.log (ordenes.map(({sillas, puff, alfombras, id}) => {
            console.log("id de orden: " + id)
            console.log(" sillas :" + sillas.name);
            console.log(" puff :" + puff.name)
            console.log(" alfombras :" + alfombras.name)
    
        }))
    }

    useEffect(()=> {
        ord()
    }, [])


    return (
        <div>
            <div>
                <Link to='/Productos/crear' >
                    <button>crear</button>
                </Link>
                <Link to='/carrito' >
                    <button>Ver carrito</button>
                </Link>
            </div>
            <div className={style.card} >{
                productos.map((producto) => {
                    return (
                        <div className={style.card1}>
                            <h1 className={style.card1Title}>{producto.name}</h1>
                            <img src={producto.url} alt="" className={style.imagenesCard} />
                            <p className={style.card1Description}>{producto.description}</p>
                            <div className={style.card1Btn}>
                                <button>eliminar</button>
                                <Link to={`/Productos/detalles/${producto.id}`}>
                                    <button>detalles</button>
                                </Link>
                            </div>
                        </div>
                            
                    )
        
                })
        }
        </div>
        </div>
    )
    
    


}

export default CardProducts;



/*
return (
        productos.map((producto, idex) => {
            console.log(producto.name[1] + "["+ idex +"]")
            return (
                
                <div className={style.card} >
                    <div className={style.card1}>
                        <h1 className={style.card1Title}>{producto.name}</h1>
                        <img src={producto.url} alt="" className={style.imagenesCard} />
                        <p className={style.card1Description}>{producto.description}</p>
                        <div className={style.card1Btn}>
                            <button>eliminar</button>
                            <Link to={`/Productos/detalles/${producto.id}`}>
                                <button>detalles</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            )

        })
    )

*/ 