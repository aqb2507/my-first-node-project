import React,{ useState } from 'react'
import Axios from 'axios'
import './App.css'

const dbUrl = "http://localhost:7000/book"

const App = () => {

  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
  const [price,setPrice] = useState(0)
  
  const handleSubmit = () => {
    Axios.post(dbUrl, {
      Title: title,
      Author: author,
      Price: price
    }).then( () => alert("Successfully logged!"))
  } 

  return (
    <div className='App'>
      <h1><b> CRUD Application </b></h1>
      <div className='details'>
        <label id='field'> Title of the Book </label>
        <input type='text' name='title' onChange={ (e) => setTitle(e.target.value)} required/>
        <label id='field'> Name of the Author </label>
        <input type='text' name='author' onChange={ (e) => setAuthor(e.target.value)} required/>
        <label id='field'> Price </label>
        <input type='number' name='price' onChange={ (e) => setPrice(e.target.value)} required />
        <button onClick={ handleSubmit }> SUBMIT </button>
      </div>
    </div>
  )
}

export default App