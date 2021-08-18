
import{Route} from 'react-router-dom'
// import PortadaView from './views/PortadaView'
import PortadaViewAdopciones from './views/PortadaViewAdopciones'
import PortadaViewArticulos from './views/PortadaViewArticulos'
import PortadaView from './views/PortadaView'
import IniciarSecionView from "./views/IniciarSecionView";
import RegistroView  from "./views/RegistroView";
import PlanesKev from "./views/PlanesKev"
import Checkout from './views/Checkout'


export default function Routes ()
{return(
    <div>
       <Route path="/" exact component={PortadaView} />
       <Route path="/Checkout" exact component={Checkout} />
       <Route path="/Donar" exact component={PlanesKev} />
       <Route path="/Adoptar" exact component={PortadaViewAdopciones} />
       <Route path="/Tienda" exact component={PortadaViewArticulos} />
       <Route path="/IniciarSecion" exact component = {IniciarSecionView}/>
         <Route path="/Registro" exact component = {RegistroView}/>
    </div>
    )
}