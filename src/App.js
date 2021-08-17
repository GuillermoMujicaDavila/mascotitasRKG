import Cards from './components/Cards'

import React from 'react'


import Narvbar from './components/Narvbar' 
import horitzontal from './assets/img/horitzontal.png'

import cel123 from './assets/img/cel123.png'
import KevPrinci from './components/KevPrinci'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes";
import CarritoContextProvider from "./context/carritoContext";
import Caracts from './components/Caracts'


export default function App() {
	
	return (
		<Router>
			<CarritoContextProvider>
				<Switch>
					<Routes />
				</Switch>
			</CarritoContextProvider>
		</Router>
	);
}
   

    
{/* <Caracts/>
<Cards/>
<KevPrinci/> */}