import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import {db} from '../../../db/firebase-config'
import { async } from '@firebase/util'
import style from './Create.module.css'

const Create = () => {
  const [description, setDescription ] = useState('')
  const [url, setUrl ] = useState('')
  const [name, setName ] = useState('')
  const [postId, setPostid ] = useState('')
  const [stok, setStok ] = useState(0)
  const [tipo, setTipo ] = useState('')
  const [precio, setPrecio ] = useState(0)

  const navigate = useNavigate()

  const coleccionProductos = collection(db, "productos")

  const store = async (e) => {
    e.preventDefault()
    await addDoc(coleccionProductos, {description: description, url: url, 
    name: name, id: id, stok: stok, tipo: tipo, precio: precio})
    navigate('/')
  }

  
    return (
    <div className= {style.container} >
        <h1>crear producto</h1>
        <form onSubmit={store}>
            <div>
                <label>nombre </label>
                <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" />
            </div>

            <div>
                <label>tipo</label>
                <input 
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                type="text" />
            </div>

            <div>
                <label>descripcion </label>
                <input 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text" />
            </div>

            <div>
                <label>precio </label>
                <input 
                value={description}
                onChange={(e) => setPrecio(e.target.value)}
                type="text" />
            </div>

            <div>
                <label>URL </label>
                <input 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text" />
            </div>

            <div>
                <label>Stok </label>
                <input 
                value={stok}
                onChange={(e) => setStok(e.target.value)}
                type="text" />
            </div>

            <div>
                <label> postID </label>
                <input 
                value={postId}
                onChange={(e) => setPostid(e.target.value)}
                type="text" />
            </div>

            <button type='submit' >agregar</button>
            
        </form>

    </div>
  )
}

export default Create
