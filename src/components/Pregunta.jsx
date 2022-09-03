import React,{Fragment,useState} from 'react';
import Error from './Error.jsx';

const Pregunta = ({guardarPresupuesto,guardarRestante,actualizarPregunta}) => {

    //Definir el state

    //El presupuesto por defecto es 0 y no va a cambiar respecto a lo que coloque el usuario
    const [cantidad, guardarCantidad] =useState(0);
    const [error, guardarError] = useState(false);

    //  Funcion que lee el presupuesto 
    //  'e' regresa un evento es decir todos los valores de dicho elemento desde donde este se ejecuta.
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value));
    }

    //Submit para definir el presupuesto

    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN( cantidad )){
            guardarError(true);
            return
        }
        //Si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }

    return (

        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ?  <Error mensaje='El presupuesto es incorrecto' /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input

                    type="number"
                    className='u-full-width' //Se llama asi por lo de esqueleton
                    placeholder='Coloca tu presupuesto'
                    onChange = {definirPresupuesto}   
                    //Another manera seria:
                    //onChange = {e => guardarCantidad(parseInt(e.target.value)}      
                />
                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir presupuesto'                
                />                
            </form>
        </Fragment>


    );


}

export default Pregunta;