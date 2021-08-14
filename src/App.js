import Cards from './components/Cards'

import React from 'react'
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes";
import CarritoContextProvider from "./context/carritoContext";


export default function App() {
	return (
		<Router>
			<CarritoContextProvider>
			<Cart />
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