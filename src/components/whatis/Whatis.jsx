import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import "./whatis.css"
import images from "../../constant/images"

const Whatis = () => {
    return (
        <div className='whatis__container' id='whatispae'>
            <div className='whatis__content c1'>
                <h2>¿Qué es PAE?</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero molestias consequatur eaque doloribus quo, ullam provident ab quos recusandae distinctio praesentium beatae fugit modi facere magni. Aut eum provident error!</p>
                <div className='whatis__content-buttons'>
                    <a href='https://wwww.mimanualdelbebe.com'>Mi Manual del Bebé</a>
                    <a href="/begin">Realizar consulta</a>
                </div>
            </div>
            <div className='whatis__image'>
                <img src={images.whatis_doctor} alt="doctor" />
            </div>
            <div className='whatis__content c2'>
                <h2>¿Qué servicios ofrece?</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero molestias consequatur eaque doloribus quo, ullam provident ab quos recusandae distinctio praesentium beatae fugit modi facere magni. Aut eum provident error!</p>
                <div className='whatis__check-list'>
                    <p>
                        <FaCheckCircle /> <b>Respuesta en menos de 2 horas.</b>
                    </p>
                    <p>
                        <FaCheckCircle /> <b>Pedíatras, ginecólogos, especialistas.</b>
                    </p>
                    <p>
                        <FaCheckCircle /> <b>Teleconsulta de 15 minutos.</b>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Whatis