import React, {useState} from 'react';

const Formulario = () => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad,guardarCantidad] = useState(0); 

    //Cuando el usuario agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault();//Referente a las querys y se coloca para poder ejecutar nuestro codigo

        // validar

        // construir el gasto 

        // Pasar el gasto al componente principal

        //resetear el form 


    }

    return(

        <form>
            <h2>Agrega tus gastos aqui</h2>
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