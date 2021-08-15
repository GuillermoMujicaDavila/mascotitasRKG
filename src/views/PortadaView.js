import React from 'react'
import { useState,useEffect } from 'react'
import Caracts from '../components/Caracts'
import Cards from '../components/Cards'
import Narvbar from '../components/Narvbar';
import Footer from '../components/Footer';

const PortadaView = _=>
    {
      
      return (<div>
          <Narvbar/>
          <Caracts/>
          <Cards/>
          <Footer/> 
          
          </div>)}

      export default PortadaView