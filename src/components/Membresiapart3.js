import React from 'react'
import ayudametro from '../assets/img/ayudometro.png'

function Membresiapart3 () {
    return (
    <div style={{
        marginTop:'60px'
    }}>
        <h3 style={{
            display:'flex',
            justifyContent:'center',
            color:'#1f386d',
            textAlign:'center'
        }}>Cada afiliado a Mascotitas RKG llevamos más ayuda a las mascotas que más <br/>lo necesitan.</h3>
        <h5 style={{
            textAlign:'center',
            marginTop:'30px'
        }}> A más afiliados, más comida llevaremos a los albergues. ¡Súmate y pasa la voz!</h5>
        <img className ="ayudometro" src={ayudametro} style={{
            width:'95vw',
            

        }}></img>
    </div>
    )
}
    export default Membresiapart3