import { React, useState, lazy } from "react";
import images from "../../constant/images";
import { FaCheckCircle } from "react-icons/fa";
import "./pay.css";

const abrirTeleconsulta = () => {
  const contenedor = document.getElementById("pagarteleconsulta");
  contenedor.style.display = "flex";
  const overlay = document.getElementById("overlayfondo");
  overlay.style.display = "block";
};
const abrirPregunta = () => {
  const contenedor = document.getElementById("pagarpregunta");
  contenedor.style.display = "flex";
  const overlay = document.getElementById("overlayfondo");
  overlay.style.display = "block";
};
const cerrarPregunta = () => {
  const contenedor = document.getElementById("pagarpregunta");
  contenedor.style.display = "none";
  const overlay = document.getElementById("overlayfondo");
  overlay.style.display = "none";
};
const cerrarTeleconsulta = () => {
  const contenedor = document.getElementById("pagarteleconsulta");
  contenedor.style.display = "none";
  const overlay = document.getElementById("overlayfondo");
  overlay.style.display = "none";
};
const SintomasMadre = () => {
  return (
    <article className="sintomas_container">
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
  );
};

const SintomasBebe = () => {
  return (
    <article className="sintomas_container">
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
  );
};

const SintomasPostparto = () => {
  return (
    <article className="sintomas_container">
      <div>
        <label for="sintomapostparto1">Dolor al amamantar</label>
        <input
          type="checkbox"
          id="sintomapostparto1"
          name="sintomas_postparto"
        />
      </div>
      <div>
        <label for="sintomapostparto2">Destete</label>
        <input
          type="checkbox"
          id="sintomapostparto2"
          name="sintomas_postparto"
        />
      </div>
      <div>
        <label for="sintomapostparto3">Rechazo del seno</label>
        <input
          type="checkbox"
          id="sintomapostparto3"
          name="sintomas_postparto"
        />
      </div>
      <div>
        <label for="sintomapostparto4">Otro</label>
        <input
          type="checkbox"
          id="sintomapostparto4"
          name="sintomas_postparto"
        />
      </div>
    </article>
  );
};

const PagarPregunta = () => {
  return (
    <article id="pagarpregunta" className="pagar__container">
      <div className="xContainer">
        <h3>Pregunta al Doctor</h3>
        <b onClick={cerrarPregunta}>&times;</b>
      </div>
      <div className="pagar_contenedor_inputs">
        <div>
          <label htmlFor="name">Nombre: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="age">Edad: </label>
          <input type="text" name="age" id="age" required />
        </div>

        <div>
          <label htmlFor="question">Pregunta: </label>
          <input type="text" name="question" id="question" required />
        </div>
      </div>

      <div className="pagar__buton-container">
        <button type="submit">Ir a pagar $3 US</button>
      </div>
    </article>
  );
};

const PagarTeleconsulta = () => {
  const [temaC, setTemaConsulta] = useState("");

  const handleTemaConsultaChange = (event) => {
    const nuevoValor = event.target.checked ? 'tienehijos' : '';
    setTemaConsulta(nuevoValor);
  };

  return (
    <form id="pagarteleconsulta" className="teleconsulta_pay">
      <div className="contenedor_pagar-teleconsulta2">
        <div className="xContainer">
          <h3 className="h3_teleconsulta">Teleconsulta</h3>
          <b onClick={cerrarTeleconsulta}>&times;</b>
        </div>
        <div className="pagar_contenedor_inputs2">
          <div>
            <label htmlFor="name">Nombre: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="lastname">Apellido: </label>
            <input type="text" name="lastname" id="lastname" required />
          </div>
          <div>
            <label htmlFor="age">Edad: </label>
            <input type="text" id="age" name="age" />
          </div>
          <div className="fecha_div">
            <label htmlFor="nacimiento">Fecha de nacimiento de la madre: </label>
            <input type="date" name="nacimiento" id="nacimiento" required />
          </div>
          <div className="fecha_div">
            <label htmlFor="fecha_parto">Fecha estimada de parto: </label>
            <input type="date" name="fecha_parto" id="fecha_parto" required />
          </div>
          <div className="div__tipo-embarazo">
            <h4>Tipo de embarazo</h4>
            <div>
              <label htmlFor="o1">Simple</label>
              <input
                type="radio"
                id="o1"
                name="option"
                value="simple"
              />
            </div>

            <div>
              <label htmlFor="opcion2">Múltiple</label>
              <input
                type="radio"
                id="opcion2"
                name="option"
                value="multiple"
              />
            </div>


          </div>
          <div>
            <label htmlFor="estatura_madre">Estatura de la madre (metros): </label>
            <input type="text" name="estatura_madre" id="estatura_madre" required />
          </div>
          <div>
            <label htmlFor="peso_madre">Peso de la madre (kg): </label>
            <input type="text" name="peso_madre" id="peso_madre" required />
          </div>
          <div id="new" className="container__embarazada-antes">
            <label htmlFor="embarazada">Ya he estado embarazada antes</label>
            <input
              type="checkbox"
              id="embarazada"
              name="embarazada"
              value="tienehijos"
              checked={temaC === "tienehijos"}
              onChange={handleTemaConsultaChange}
            />
          </div>
          <div>
            {temaC === "tienehijos" && (
              <div className="contenedor_hijos">
                <div>
                  <label htmlFor="cantidad_hijos">¿Cuántos hijos tiene?</label>
                  <input type="number" name="cantidad_hijos" id="cantidad_hijos" required />
                </div>
              </div>
            )}
          </div>
          <div className="preguntas_finales-container">
            <div>
              <label htmlFor="perdido_bebe">¿Has perdido un bebé?</label>
              <input type="checkbox" name="perdido_bebe" id="perdido_bebe" required />
            </div>
            <div>
              <label htmlFor="fuma">¿Fumas?</label>
              <input type="checkbox" name="fuma" id="fuma" required />
            </div>
            <div>
              <label htmlFor="alcohol">¿Bebes alcohol?</label>
              <input type="checkbox" name="alcohol" id="alcohol" required />
            </div>
            <div>
              <label htmlFor="droga">¿Consumes algún tipo de droga?</label>
              <input type="checkbox" name="droga" id="droga" required />
            </div>
            <div>
              <label htmlFor="discapacidad">¿Tienes algún tipo de discapacidad?</label>
              <input type="checkbox" name="discapacidad" id="discapacidad" required />
            </div>
            <div>
              <label htmlFor="ejercicio">¿Te ejercitas? </label>
              <input type="checkbox" name="ejercicio" id="ejercicio" required />
            </div>
          </div>
          <div className="pagar__buton-container">
          <button type="submit">Ir a pagar $20 US</button>
        </div>
        </div>
      </div>
    </form>
  );
};

const Pay = () => {
  const [temaConsulta, setTemaConsulta] = useState("");

  const handleTemaConsultaChange = (event) => {
    setTemaConsulta(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (temaConsulta === "") {
      alert("Debes seleccionar una opción antes de enviar el formulario.");
      return;
    }
  };

  return (
    <main className="begin__main">
      <PagarPregunta />
      <PagarTeleconsulta />
      <form onSubmit={handleSubmit} className="begin__form-container">
        <div className="begin__logo-container">
          <img src={images.logo} alt="logo" />
          <h5>Pregúntale al Experto</h5>
          <p>Realiza tu teleconsulta rápidamente</p>
        </div>
        <div className="begin__form-container-1">
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
                checked={temaConsulta === "embarazo"}
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
                checked={temaConsulta === "bebe"}
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
                checked={temaConsulta === "postparto"}
                onChange={handleTemaConsultaChange}
              />
            </div>
          </div>

          <div className="begin__form dos">
            <h2>Síntomas</h2>
            <p>Luego, seleccione síntomas: </p>

            <div>
              {temaConsulta === "embarazo" && <SintomasMadre />}
              {temaConsulta === "bebe" && <SintomasBebe />}
              {temaConsulta === "postparto" && <SintomasPostparto />}
            </div>
          </div>
        </div>

        <div className="begin__form-2">
          <h2>Tipo de consulta</h2>

          <div className="begin__form-cuppon">
            <label>Tengo un código de descuento: </label>
            <input id="codigo_descuento" type="text" name="codigo_descuento" />
          </div>

          <div className="option__container">
            <div className="begin__form-option">
              <h3>Pregúntale al Doctor</h3>
              <p>
                <FaCheckCircle className="circle_check" /> Respuesta en menos de 2 horas.
              </p>
              <p>
                <FaCheckCircle className="circle_check" /> Pedíatras, ginecólogos, médicos especialistas
                en el embarazo.
              </p>
              <div className="begin__final-buton">
                <button onClick={abrirPregunta} type="button">
                  Realizar pregunta por $3 US
                </button>
              </div>
            </div>
            <div className="begin__form-option">
              <h3>Teleconsulta</h3>
              <p>
                <FaCheckCircle className="circle_check" /> Teleconsulta de 15 minutos.
              </p>
              <p>
                <FaCheckCircle className="circle_check" /> Expertos en el área para responder sus dudas.
              </p>
              <div className="begin__final-buton">
                <button onClick={abrirTeleconsulta} type="button">
                  Realizar teleconsulta por $20 US
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="overlay__fondo" id="overlayfondo"></div>
    </main>
  );
};

export default Pay;
