import React from 'react'
import { FaStar } from 'react-icons/fa';
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import "./pro.css"

const Stars = () => {
    return (
        <div className='stars__container'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
    )
}

const Content = ({ nombre, pais, especialidad }) => {
    return (
        <div className='card__content'>
            <h4>{nombre}</h4>
            <Stars />
            <p>{pais}</p>
            <p>{especialidad}</p>
        </div>
    )
}

const verMas = () => {
    const contenedor = document.getElementById("ocultos");
    contenedor.style.display = "flex";
    const icono = document.getElementById("mas");
    icono.style.display = "none";
    const icono2 = document.getElementById("menos");
    icono2.style.display = "flex";
}

const verMenos = () => {
    const contenedor = document.getElementById("ocultos");
    contenedor.style.display = "none";
    const icono = document.getElementById("mas");
    icono.style.display = "flex";
    const icono2 = document.getElementById("menos");
    icono2.style.display = "none";
}


const NoProfileUser = ({ nombre, pais, especialidad }) => {
    return (
        <div className='card__container'>
            <div className="pro__image-container ctX"></div>
            <Content nombre={nombre} pais={pais} especialidad={especialidad} />
        </div>
    )
}
const Pro = () => {
    return (
        <div className='pro__container' id='pros'>
            <div className='pro__title'>
                <h3>Nuestros profesionales</h3>
            </div>

            <div className='cards__container'>

                <div className='card__container'>
                    <div className="pro__image-container ct1"></div>
                    <Content nombre="Susan Martinez Lozada" pais="Colombia, Bogotá" especialidad="Pediatra" />
                </div>

                <div className='card__container'>
                    <div className="pro__image-container ct2"></div>
                    <Content nombre="Gina Cristina Guayacan Mora" pais="Colombia, Bogotá" especialidad="Pediatra" />
                </div>

                <div className='card__container'>
                    <div className="pro__image-container ct3"></div>
                    <Content nombre="Carlos Valasquez" pais="Colombia, Bogotá" especialidad="Pediatra" />
                </div>

                <div className='card__container'>
                    <div className="pro__image-container ct4"></div>
                    <Content nombre="Andrés Felipe Jimenez" pais="Colombia, Villavicencio" especialidad="Pediatra" />
                </div>

                <NoProfileUser nombre="Daniel Rojas" pais="Colombia, Facatativa" especialidad="Pediatra" />
                <NoProfileUser nombre="Henry Cabrera" pais="Chile" especialidad="Pediatra" />
                <NoProfileUser nombre="Paola Cruz" pais="Colombia, Popayan" especialidad="Pediatra" />

                <div className='card__container-ocultos' id='ocultos'>
                    <NoProfileUser nombre="Carla del Valle Cárdenas" pais="Colombia, Pereira" especialidad="Pediatra" />
                    <NoProfileUser nombre="Dario Botero" pais="Colombia, Bogotá" especialidad="Pediatra" />
                    <NoProfileUser nombre="Amparo Diaz" pais="Colombia, Bogotá" especialidad="Pediatra" />
                    <NoProfileUser nombre="Maria Alejandra Montaño" pais="Colombia, Bogotá" especialidad="Pediatra" />
                    <NoProfileUser nombre="Eliana Ocampo" pais="Colombia, Monteria" especialidad="Pediatra" />
                    <NoProfileUser nombre="Maritza Franco López" pais="Colombia, Bogotá" especialidad="Pediatra" />
                    <NoProfileUser nombre="Carolina Ibañez" pais="Chile, Santiago" especialidad="Pediatra Infectóloga" />
                    <NoProfileUser nombre="Carlos Sánchez" pais="Colombia, Cartagena" />
                    <NoProfileUser nombre="Yira Torres" pais="Colombia, Bogotá" especialidad="Pediatra" />
                </div>

                <div className='card__button-oculto' id='mas'>
                    <button type='button' onClick={verMas}>
                        <IoIosAddCircle />
                    </button>
                    Ver más
                </div>
                <div className='card__button-oculto botonmenos' id='menos'>
                    <button type='button' onClick={verMenos}>
                        <IoIosRemoveCircleOutline />
                    </button>
                    Ver menos
                </div>

            </div>
        </div>
    )
}

export default Pro