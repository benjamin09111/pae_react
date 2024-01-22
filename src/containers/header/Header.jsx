import React from "react";
import images from "../../constant/images";
import "./header.css";

const Header = () => {
    return (
        <header className="app__header">
            <div className="overlay">
                <div className="sobre_overlay"></div>
            </div>

            <div className="app__header-bigcontainer">
                <div className="app__header-content__title">
                    <h1>Pregúntale al Experto</h1>
                    <p>
                        Acompañar a las familias a tener embarazos sanos y venturosos y crianzas positivas y felices. Con la ayuda de diferentes profesionales, puedes llevar tu día a día con seguridad.
                    </p>
                    <div>
                        <a href="/begin">Iniciar consulta</a>
                        <a href="#pros">Ver profesionales</a>
                    </div>
                </div>

                <div className="app__header-diagram">
                    <div className="app__header-diagram__content">
                        <img src={images.n1} alt="numero1" />
                        <p>Accede e inicia con el botón de nuestra página</p>
                    </div>
                    <div className="app__header-diagram__content">
                        <img src={images.n2} alt="numero2" />
                        <p>Indica el tipo de consulta y síntomas </p>
                    </div>
                    <div className="app__header-diagram__content">
                        <img src={images.n3} alt="numero3" />
                        <p>
                            Paga por el tipo de servicio: consulta inmediata o pregunta al
                            doctor
                        </p>
                    </div>
                    <div className="app__header-diagram__content">
                        <img src={images.n4} alt="numero4" />
                        <p>Envía tus datos y espera tu respuesta</p>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
