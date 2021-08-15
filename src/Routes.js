import{Route} from 'react-router-dom'
// import PortadaView from './views/PortadaView'
import PortadaViewAdopciones from './views/PortadaViewAdopciones'
import PortadaViewArticulos from './views/PortadaViewArticulos'
import PortadaView from './views/PortadaView'
import IniciarSecionView from "./views/IniciarSecionView";
import RegistroView  from "./views/RegistroView";


export default function Routes ()
{return(
    <div>
       <Route path="/" exact component={PortadaView} />
       <Route path="/Adoptar" exact component={PortadaViewAdopciones} />
       <Route path="/Tienda" exact component={PortadaViewArticulos} />
       <Route path="/IniciarSecion" exact component = {IniciarSecionView}/>
         <Route path="/Registro" exact component = {RegistroView}/>
    </div>
    )
}