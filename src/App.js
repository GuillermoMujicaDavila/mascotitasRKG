import Cards from './components/Cards'

import React from 'react'



import horitzontal from './assets/img/horitzontal.png'

import cel123 from './assets/img/cel123.png'
import KevPrinci from './components/KevPrinci'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes";
import CarritoContextProvider from "./context/carritoContext";
import Caracts from './components/Caracts'
import { AuthContextProvider } from './context/authContext'


export default function App() {
	
	return (
		<Router>
			<AuthContextProvider>
				<CarritoContextProvider>
					<Switch>
						<Routes />
					</Switch>
				</CarritoContextProvider>
			</AuthContextProvider>
		</Router>
	);
}
   

    
{/* <Caracts/>
<Cards/>
<KevPrinci/> */}