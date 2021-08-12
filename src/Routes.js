import{Route} from 'react-router-dom'
// import PortadaView from './views.js/PortadaView'
import PortadaViewAdopciones from './views.js/PortadaViewAdopciones'
import PortadaViewArticulos from './views.js/PortadaViewArticulos'
import PortadaView from './views.js/PortadaView'


export default function Routes ()
{return(
    <div>
       <Route path="/" exact component={PortadaView} />
       <Route path="/" exact component={PortadaViewAdopciones} />
       <Route path="/" exact component={PortadaViewArticulos} />

    </div>
    )
}