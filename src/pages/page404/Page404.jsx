import React from 'react'
import "./page404.css"
import images from "../../constant/images"

const Page404 = () => {
  return (
    <div className='contenedor'>
      <img src={images.logo} alt="logo" />
      <p>¡Error! Pulse <a className='volver_a' href="/"><b>aquí</b></a> para volver.</p>
    </div>
  )
}

export default Page404