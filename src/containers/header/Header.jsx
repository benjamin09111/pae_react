import {React, lazy} from "react";
import images from "../../constant/images";
import "./header.css";

const Instruct = lazy(() => import("../../components/instruccion/Instruct"))

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
                    <Instruct image={images.n1} texto="Accede e inicia con el botón de nuestra página"/>
                    <Instruct image={images.n2} texto="Indica el tipo de consulta y síntomas"/>
                    <Instruct image={images.n3} texto="Paga por el tipo de servicio: consulta inmediata o pregunta al
                    doctor"/>
                    <Instruct image={images.n4} texto="Envía tus datos y espera tu respuesta"/>
                </div>
            </div>

        </header>
    );
};

export default Header;
