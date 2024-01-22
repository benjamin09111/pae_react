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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eos nisi reprehenderit sapiente. Blanditiis maxime molestias voluptatem accusamus culpa consequatur recusandae, asperiores ducimus, voluptates ab praesentium, quod nemo ipsum ut.
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