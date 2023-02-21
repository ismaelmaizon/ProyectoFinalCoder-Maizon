import React, {useContext } from 'react';
import style from '../Navbar/Navbar.module.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { BiDrink } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import styles from '../Navbar/app.module.css';
import { useState } from 'react';
import { CartContext } from '../Context/Contexto';

const Navbar = () => {

  const [input, setInput] = useState("")


  //contexto

  const {totalProd} = useContext(CartContext)
  const {setTotalProd} = useContext(CartContext)


  

  return (
    <div className={style.container}>
      {/* logo */}
      <div className={style.title}>
        <Link className={style.title_1} to="/" >
          <h1><BiDrink/> DecoBodereau</h1>
        </Link>
        
      </div>
      
      <div className={style.right}>
        <ul className={style.menu_list}>
            <NavLink to='/Productos' className={({ isActive }) =>
              isActive ? styles.activeClassName : styles.noActiveClassName} >
              <li>Productos
                <li  className={style.menu_productos}>
                  <ul className={style.menu_nestig} >
                    <Link to="/Productos/sillas" className='links'>
                      <li className={style.menu_dentro}>sillas</li>
                    </Link>
                    <Link to="/Productos/puff" className='links'>
                      <li className={style.menu_dentro}>puff</li>
                    </Link>
                    <Link to="/Productos/alfombras" className='links'>
                      <li className={style.menu_dentro} >alfombras</li>
                    </Link>
                  </ul>
                </li>
                
              </li>
            </NavLink>
            <NavLink to='/Nosotros' className={({ isActive }) =>
              isActive ? styles.activeClassName : styles.noActiveClassName}  >
              <li>Nosotros</li>
            </NavLink>
            <NavLink to='/Contactos' className={({ isActive }) =>
              isActive ? styles.activeClassName : styles.noActiveClassName}  >
              <li>Contactos</li>
            </NavLink>
        </ul>
        <input type="text" placeholder='buscar' className='find' 
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setInput("")}
        value={input} />
        <button className={style.btn_shared} >buscar</button>
        <div className={style.carrito} >
        <Link to='/carrito' >
          <BsFillCartPlusFill/>{totalProd}
        </Link>
        </div>
        <h2> {input} </h2>
      </div>
      
    </div>
  )
}

export default Navbar;
