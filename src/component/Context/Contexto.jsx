
//base de datos
import { db } from '../../../db/firebase-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';



//contexto

import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
export const CartContext = createContext([])

// creando mi propio hoock
 
export const useCartContext = () => useContext(CartContext)


const CartProvider = ({children}) => {

    const [productos, setProductos] = useState([])
    const prodCollection = collection(db, "productos" )
    // obtencion desde firebase
    const getProductos = async () => {
        const dataProd = await getDocs(prodCollection);
        console.log(dataProd);
        setProductos(dataProd.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };


    // funcion para eliminar
    const deleteProductos = async (id) => {
        const productoDoc = doc(db, "productos", id );
        await deleteDoc(productoDoc);
        getProductos();
    }

    useEffect(() => {
        getProductos();
    }, []);
    

    /////////// logica para carrito //////////////////////////

    const [carrito, setCarrito] = useState([]);

    /*agregar al carrito*/ 
    // const addProduct = (item, quantity) => {
    //     let newCart;
    //     let product = carrito.find(product => product.id === item.id)
    //     if (product) {
    //         product.quantity += quantity;
    //         newCart = [...carrito]
    //     }else{
    //         product = {...item, quantity: quantity};
    //         newCart = [...cart, product];
    //     }
    //     setCarrito(newCart);
    // }

    /*2*/
    const addProduct = (id) => {
        if (siExiste(id)) {
            setCarrito( productos.map(prod => {
                return prod.id === id ?  carrito.push(prod) : console.log("no se encontro producto con ese ID")
         }));
     }
    }

    console.log('carrito', carrito)

    /*ya existe?*/
    const siExiste = (id) => carrito.find(product => product.id === id) ? true : false;
    /*remover del carrito*/ 
    const removeCarrito = (id) => setCarrito(carrito.filter(product => product.id !== id));


    /*limpar carrito*/
    const limpiarCarrito = () => setCarrito([]);



    return (
        <CartContext.Provider value={{
            productos,
            carrito, setCarrito,
            addProduct, 
            siExiste, 
            removeCarrito, 
            limpiarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}



export default CartProvider;