import React from 'react'
import images from "../../constant/images"
import "./header.css"

const Header = () => {
return (
    <header className='app__header'>
        <div className='app__header-content'>
            <div className='app__header-content__title'>
                <h1>Pregúntale al Experto</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi modi quasi sequi molestias doloribus eos incidunt placeat eaque ab. Sapiente odio quisquam explicabo repellat voluptate impedit esse, praesentium facilis voluptatibus!</p>
                <div>
                    <a href="/begin">Iniciar consulta</a>
                    <a href="#profesionales">Ver profesionales</a>
                </div>
            </div>
            <div className='app__header-diagram'>
                <div className='app__header-diagram__content'>
                    <img src={images.n1} alt="numero1" />
                    <p>Accede e inicia con el botón de nuestra página</p>
                </div>
                <div className='app__header-diagram__content'>
                    <img src={images.n2} alt="numero2" />
                    <p>Indica el tipo de consulta y síntomas </p>
                </div>
                <div className='app__header-diagram__content'>
                    <img src={images.n3} alt="numero3" />
                    <p>Paga por el tipo de servicio: consulta inmediata o pregunta al doctor</p>
                </div>
                <div className='app__header-diagram__content'>
                    <img src={images.n4} alt="numero4" />
                    <p>Envía tus datos y espera tu respuesta</p>
                </div>
            </div>
        </div>

        <div className='app__header-image'>
            <div className='app__header-overlay'></div>
            <img src={images.fondo_home} alt="background" />
        </div>
        
    </header>
)
}

export default Header