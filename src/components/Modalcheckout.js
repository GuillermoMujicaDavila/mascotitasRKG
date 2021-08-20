import React from 'react';
import { Link } from "react-router-dom";
import {Modal,TexField,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import  { useEffect, useState } from "react";
// import {Modal} from '@material-ui/core';
// import Button from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import swal from 'sweetalert'
import Tarjeta from './CreditCard'
import Particles from '../components/Particles'
import Boid from '../components/Boid'
import serviceWorker from '../components/serviceWorker'
import nyancat from "../assets/img/nyan-cat.gif"


const useStyles=makeStyles((theme)=>(
{
    modal:{
        position:'absolute',
        widht:400,
        backgroundColor:'white',
        border:'2px solid #000',
        boxShadow: theme.shadows[5],
        padding:"16px 32px 24px",
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
        
    },
    textfield:
    {
        width:'100%'
    },
    button:{
        textAlign:'center'
    }
}))

function Modalcheckout(){
    const mostrarAlerta=()=>
{
    swal({
        title:'Gracias por tu compra!',
        text:'Le enviaremos la factura a su correo electrónico!',
        icon:'success',
        // button:'aceptar',
        showConfirmButton:true,
            showDenyButton:true,
            denyButtonText:'Cancelar',
            confirmButtonText:'Sigamos!',
            background: {nyancat},
        backdrop: `
              rgba(0,0,123,0.4)
              url{nyancat}
              left center
              no-repeat
            `,
    });
}
const styles = useStyles();
const [modal, setModal]=useState(false);

const abrirCerrarModal = ()=>
{
    setModal(!modal)
}

const body=(
    <div className={styles.modal} style={{
        border:'none',
        borderRadius:'30px',
        padding:'85px'
    }}>
    <div align="center" 
            >
                <Tarjeta></Tarjeta>
                <section>
                <Button  onClick={()=>abrirCerrarModal()} style={{
                    textDecoration:'none',
                    postition:'relative',
                    top:'60px',
                }}><Link to='/Donar' style={{
                textDecoration:'none'
                }}>Cancelar</Link></Button>
                <Button color="primary" onClick={()=>mostrarAlerta()} style={{
                    textDecoration:'none',
                    postition:'relative',
                    top:'60px',
                }}>Pagar</Button>
                </section>
                
                </div>
    </div>
)
{
    return(
        <div className="Modalcheckout" style={{
            color:'skyblue'
        }}>
            <Button className={styles.button}  onClick={()=>abrirCerrarModal()}><h5 style={{
                color:'white',
                position:'relative',
                top:'20px'
            }}>Comprar</h5></Button>
            <Modal open={modal} onClose={abrirCerrarModal}>
                {body}
            </Modal>
            
        </div>
    );
}}

export default Modalcheckout