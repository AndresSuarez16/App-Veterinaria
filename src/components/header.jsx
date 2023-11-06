import React from 'react'
import '../styles/header.css'

const header = ({ children }) => {
  return (
    <header id='header'>
        <div>imagen logo</div>
        <h1 id="Titulo"> {children} </h1>
    </header>
  )
}

export default header