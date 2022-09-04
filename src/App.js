import React,{useState, useEffect} from 'react';
import Pregunta from './components/Pregunta.jsx'
import Formulario from './components/Formulario.jsx'
import Listado from './components/Listado.jsx'
import ControlPresupuesto from './components/ControlPresupuesto.jsx'

function App() {

  //definir el state
  const [presupuesto,guardarPresupuesto] = useState(0);
  const [restante,guardarRestante] = useState(0);
  const [mostrarpregunta,actualizarPregunta ] = useState(true);
  const [gastos, guardarGastos] = useState([]); //Sera un arreglo de objetos
  const [gasto,guardaGasto] = useState({});
  const [creargasto,guardarCrearGasto] = useState(false);

  //UseEffect que actualiza el restante

  useEffect( () => {
    if(creargasto){

      //Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto         
    ]);

    //Resta del presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;
    guardarRestante(presupuestoRestante)
    //Resetear a false

    guardarCrearGasto(false);
  } 



  }, [gasto]); //El arreglo vacio es una dependencia

    const agregarNuevoGasto = gasto=>{
      // guardarGastos([
      //   ...gastos,
      //   gasto
      // ]);
    }


  return (
    <div className="container">

      <header>
        <h1>Gasto Semanal </h1>

        <div className='contenido-principal contenido'>
          { mostrarpregunta ? 
          (
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
          />
          ) :  (
              <div className='row'>
                <div className='one-half column'>
                  <Formulario 
                  
                  guardaGasto={guardaGasto}
                  guardarCrearGasto={guardarCrearGasto}
                  />
                </div>

                <div className='one-half column'>
                  <Listado 
                    gastos={gastos}
                    
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
          ) }              
        </div>
      </header>
    </div>
  );
}

export default App;
