import React from 'react';
import Gasto from './Gasto.jsx';

const Listado = ({gastos}) =>(

    <div className='gastos-realizados'>

        <h2>Gastos</h2>
        {gastos.map(gasto =>(
            // Cuando pasamos varios elementos, cada uno es necesario que tenga un ID unico
            //Que es lo que hicimos ya con gasto, y el shortid
            <Gasto
                key = {gasto.id}
                gasto={gasto}
            />
        ))}
    </div>



);
//Return implicito

export default Listado;