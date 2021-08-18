import React from 'react'
import { useState,useEffect } from 'react'
import { obtenerProductos } from '../services/productoService'
import GroupProducts from '../components/GroupProducts'
import Caracts from '../components/Caracts'
import Cards from '../components/Cards'
import VideoBackground from '../components/VideoBackground'
import Narvbar from '../components/Narvbar'
import Footer from '../components/Footer'
import KevPrinci from '../components/KevPrinci'

const PortadaView = _=>
    {
      
      return (<div>
          <VideoBackground/>
            <Narvbar/>
            <Cards/>
            <Caracts/>
            <KevPrinci/>
          <Footer/>
          
          </div>)}

      export default PortadaView