import React from 'react'
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import "./comments.css"

const Comment = ({nombre, comentario }) =>{
    return(
        <div className='c__container'>
            <div className='ct__content'>
                <FaQuoteLeft className='icon__comment' />
                <p>{comentario}</p>
            </div>
            <div className='comment__name'>- {nombre}</div>
        </div>
    )
}

const Comments = () => {
    return (
        <div className='comm__container' id='comments'>
            <div className='comm__content'>
                <h4>Conoce lo que aman nuestros clientes del servicio</h4>
                <p>
                    Somos muy conscientes y nos preocupamos de nuestra comunidad. Es importante recibir un servicio de calidad para una crianza positiva y feliz. Nuestros valores son la <b>confianza</b>, la <b>libertad</b> y el <b>reto</b>.
                </p>
                <a href='/begin'> Iniciar Consulta </a>
            </div>
            <div className='comments__container'>
                
                <div className='comment__container'>
                    <div className='image__container'>
                        <div className='image im1'></div>
                    </div>
                    <Comment nombre="Yoselin" comentario="Fue muy rápido, la verdad es que es muy fácil navegar por la página."/>
                </div>

                <div className='comment__container'>
                    <div className='image__container'>
                        <div className='image im1'></div>
                    </div>
                    <Comment nombre="Ale Gomez" comentario="Quedo muy satisfecha con la consulta, todo me gustó, la disposición del doctor y su explicación, me dejó tranquila."/>
                </div>

                <div className='comment__container'>
                    <div className='image__container'>
                        <div className='image im1'></div>
                    </div>
                    <Comment nombre="Laura Beltran" comentario="Tiene muchas opciones de posibles síntomas y es acertado con todos los datos. Es llamativo y fácil de entender."/>
                </div>

            </div>
        </div>
    )
}

export default Comments