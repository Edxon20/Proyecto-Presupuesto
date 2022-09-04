import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardaGasto,guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad,guardarCantidad] = useState(0); 
    const [error, guardarError] = useState(false);
    

    //Cuando el usuario agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault();//Referente a las querys y se coloca para poder ejecutar nuestro codigo
        // validar

        if(cantidad < 1 || isNaN(cantidad) || nombre.trim === ''){

            guardarError(true);
            return;
        }

        guardarError(false);

        // construir el gasto 
        //Podemos usar nombre:nombre pero asi lo toma implicitamente   
        const gasto ={
            nombre,
            cantidad,
            id: shortid.generate()
        }

        console.log(gasto)        

        // Pasar el gasto al componente principal

        guardaGasto(gasto);
        guardarCrearGasto(true);


        //resetear el form  
        guardarNombre('');
        guardarCantidad(0);


    }

    return(

        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

            {/* //En caso que el error sea cierto renderizara el componente 'Error' */}
            {error ?<Error mensaje='Error en una de los campos'/> : null}

            <div className='campo'>
                <label>Nombre del gasto  </label>
                <input 
                    type='text'
                    className='u-full-width'
                    placeholder='Ejemplo transporte'
                    value={nombre}                                  //Uso en conjunto # nombre viene del hook
                    onChange={e => guardarNombre(e.target.value)}   //Uso en conjunto ##
                />
            </div>

            <div className='campo'>
                <label>Cantidad gasto</label>
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder='Ejemplo 300'
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))} 
                />
            </div>

            <input
                type='submit'
                className='button-primary u-full-width'
                value='Agregar gasto'
            />
        </form>


    );


};


export default Formulario;