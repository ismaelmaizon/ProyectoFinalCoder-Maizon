import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/Contexto';
import style from './List.module.css';



const ListAlfombras = function () {


    const alfom = []
    
    //contexto, con esto no es necesario pasar los productos por medio de props

    const {productos} = useContext(CartContext);
    console.log("productos: ", productos);

    
    productos.forEach(function (producto) {
        if (producto.tipo == "alfombra") {
          alfom.push(producto)
        }
    })

    console.log(alfom);

    
    return (
      alfom.map((el) => {
        return (
          <div className={style.card1}>
                    <h1 className={style.card1Title}>{el.name}</h1>
                    <img src={el.url} alt="" className={style.imagenesCard} />
                    <p className={style.card1Description}>{el.description}</p>
                    <div className={style.card1Btn}>
                        <Link to={`/Productos/detalles/${el.id}`}>
                            <button>detalles</button>
                        </Link>
                    </div>
                </div>
        )
      })
    )

    
  }


export default ListAlfombras;