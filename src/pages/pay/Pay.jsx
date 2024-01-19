import React, { useState } from 'react';
import images from "../../constant/images";
import { FaCheckCircle } from 'react-icons/fa';
import "./pay.css";

const abrirTeleconsulta = () =>{
  const contenedor = document.getElementById("pagarteleconsulta");
  contenedor.style.display = "flex";
  const overlay = document.getElementById("overlayfondo");
  overlay.style.display = "block";
}

const abrirPregunta = () =>{
  const contenedor = document.getElementById("pagarpregunta");
  contenedor.style.display = "flex";
  const overlay = document.getElementById("overlayfondo");
  overlay.style.display = "block";
}

const cerrarPregunta = () =>{
  const contenedor = document.getElementById("pagarpregunta");
  contenedor.style.display = "none";
  const overlay = document.getElementById("overlayfondo");
  overlay.style.display = "none";
}

const cerrarTeleconsulta = () =>{
  const contenedor = document.getElementById("pagarteleconsulta");
  contenedor.style.display = "none";
  const overlay = document.getElementById("overlayfondo");
  overlay.style.display = "none";
}

const SintomasMadre = () => {
  return(
    <article className='sintomas_container'>
    <div>
    <label for="sintomamadre1">Dolor de vientre</label>
    <input type="checkbox" id="sintomamadre1" name="sintomas_madre" />
    </div>
    <div>
    <label for="sintomamadre2">Calambre/Dolor de piernas</label>
    <input type="checkbox" id="sintomamadre2" name="sintomas_madre" />
    </div>
    <div>
    <label for="sintomamadre3">Dolor tren inferior</label>
    <input type="checkbox" id="sintomamadre3" name="sintomas_madre" />
    </div>
    <div>
    <label for="sintomamadre4">Otro</label>
    <input type="checkbox" id="sintomamadre4" name="sintomas_madre" />
    </div>
  </article>
  )
}

const SintomasBebe = () => {
  return(
    <article className='sintomas_container'>
    <div>
    <label for="sintomabebe1">Estreñimiento</label>
    <input type="checkbox" id="sintomabebe1" name="sintomas_bebe" />
    </div>
    <div>
    <label for="sintomabebe2">Congestión nasal / tos</label>
    <input type="checkbox" id="sintomabebe2" name="sintomas_bebe" />
    </div>
    <div>
    <label for="sintomabebe3">Dolor de estomago</label>
    <input type="checkbox" id="sintomabebe3" name="sintomas_bebe" />
    </div>
    <div>
    <label for="sintomabebe4">Otro</label>
    <input type="checkbox" id="sintomabebe4" name="sintomas_bebe" />
    </div>
  </article>
  )
}

const SintomasPostparto = () => {
  return(
    <article className='sintomas_container'>
    <div>
    <label for="sintomapostparto1">Dolor al amamantar</label>
    <input type="checkbox" id="sintomapostparto1" name="sintomas_postparto" />
    </div>
    <div>
    <label for="sintomapostparto2">Destete</label>
    <input type="checkbox" id="sintomapostparto2" name="sintomas_postparto" />
    </div>
    <div>
    <label for="sintomapostparto3">Rechazo del seno</label>
    <input type="checkbox" id="sintomapostparto3" name="sintomas_postparto" />
    </div>
    <div>
    <label for="sintomapostparto4">Otro</label>
    <input type="checkbox" id="sintomapostparto4" name="sintomas_postparto" />
    </div>
  </article>
  )
}

const PagarPregunta = () => {
  return(
    <article id='pagarpregunta' className='pagar__container'>
      <div className='xContainer'>
        <h3>Pregunta</h3>
        <b onClick={cerrarPregunta}>&times;</b>
      </div>
      <div className='pagar_contenedor_inputs'>
        <div>
        <label htmlFor="name">Nombre: </label>
        <input type="text" name='name' id='name' required/>
        </div>
        <div>
        <label htmlFor="age">Edad: </label>
        <input type="text" name='age' id='age' required/>
        </div>

        <div>
        <label htmlFor="question">Pregunta: </label>
        <input type="text" name='question' id='question' required/>
        </div>
      </div>

      <div className='pagar__buton-container'>
        <button type='submit'>Ir a pagar $3 US</button>
      </div>
    </article>
  )
}

const PagarTeleconsulta = () => {
  return(
    <article id='pagarteleconsulta' className='pagar__container'>
      <div className='xContainer'>
        <h3>Teleconsulta</h3>
        <b onClick={cerrarTeleconsulta}>&times;</b>
      </div>
      <div className='pagar_contenedor_inputs'>
        <div>
        <label htmlFor="name">Nombre: </label>
        <input type="text" name='name' id='name' required/>
        </div>
        <div>
        <label htmlFor="age">Edad: </label>
        <input type="text" id='age' name='age' />
        </div>
      </div>

      <div className='pagar__buton-container'>
        <button type='submit'>Ir a pagar $20 US</button>
      </div>
    </article>
  )
}

const Pay = () => {
  const [temaConsulta, setTemaConsulta] = useState('');

  const handleTemaConsultaChange = (event) => {
    setTemaConsulta(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (temaConsulta === '') {
      alert('Debes seleccionar una opción antes de enviar el formulario.');
      return;
    }
  };

  return (
    <main className='begin__main'>
        <PagarPregunta/>
        <PagarTeleconsulta/>
      <form onSubmit={handleSubmit} className="begin__form-container">
        <div className='begin__form-container-1'>
        <div className="begin__form uno">
          <h2>Temática</h2>
          <p>Seleccione una opción: </p>

          <div>
          <label htmlFor="opcion1">Embarazo</label>
          <input
            type="radio"
            id="opcion1"
            name="opciones"
            value="embarazo"
            checked={temaConsulta === 'embarazo'}
            onChange={handleTemaConsultaChange}
          />
          </div>

          <div>
          <label htmlFor="opcion2">Bebé</label>
          <input
            type="radio"
            id="opcion2"
            name="opciones"
            value="bebe"
            checked={temaConsulta === 'bebe'}
            onChange={handleTemaConsultaChange}
          />
          </div>

          <div>
          <label htmlFor="opcion3">Mamá postparto</label>
          <input
            type="radio"
            id="opcion3"
            name="opciones"
            value="postparto"
            checked={temaConsulta === 'postparto'}
            onChange={handleTemaConsultaChange}
          />
          </div>

        </div>

        <div className="begin__form dos">
          <h2>Síntomas</h2>
          <p>Seleccione síntomas: </p>

          {temaConsulta === 'embarazo' && <SintomasMadre />}
          {temaConsulta === 'bebe' && <SintomasBebe />}
          {temaConsulta === 'postparto' && <SintomasPostparto />}

        </div>
        </div>

        <div className="begin__form-2">
          <h2>Tipo de consulta</h2>

          <div className="begin__form-cuppon">
            <label>Tengo un código de descuento: </label>
            <input id='codigo_descuento' type="text" name='codigo_descuento'/>
          </div>

        <div className='option__container'>
        <div className="begin__form-option">
            <h3>Pregúntale al Doctor</h3>
            <p><FaCheckCircle/>  Respuesta en menos de 2 horas.</p>
            <p><FaCheckCircle/>  Pedíatras, ginecólogos, médicos especialistas en el embarazo.</p>
            <div className="begin__final-buton">
            <button onClick={abrirPregunta} type="button">Realizar pregunta por $3 US</button>
          </div>
          </div>
          <div className="begin__form-option">
            <h3>Teleconsulta</h3>
            <p><FaCheckCircle/>  Teleconsulta de 15 minutos.</p>
            <p><FaCheckCircle/>  Expertos en el área para responder sus dudas.</p>
            <div className="begin__final-buton">
            <button onClick={abrirTeleconsulta} type="button">Realizar teleconsulta por $20 US</button>
          </div>
          </div>
        </div>
        </div>

      </form>
      <div className='overlay__fondo' id='overlayfondo'></div>
      <div className='app__header-image'>
        <div className='app__header-overlay'></div>
        <img src={images.b1} alt="background" />
      </div>
    </main>
  )
}

export default Pay