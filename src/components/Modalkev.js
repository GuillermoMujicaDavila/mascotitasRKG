import React from 'react';
import { Link } from "react-router-dom";
import {Modal,TexField,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import  { useEffect, useState } from "react";
// import {Modal} from '@material-ui/core';
// import Button from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import swal from 'sweetalert'


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

function Modalkev(){
    const mostrarAlerta=()=>
{
    swal({
        title:'Gracias por mandarnos tus datos!',
        text:'Pronto nos comunicaremos contigo',
        icon:'success',
        button:'aceptar'
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
                <h2 style={{
                    color:'#0d6efd'
                }}>Rellene sus datos</h2>
                <h5 style={{
                    color:'skyblue'
                }}>Para coordinar la forma de pago </h5>
                </div>
                <TextField label="Nombre" className={styles.textfield}/>
                <br/>
                <TextField label="Apellido" className={styles.textfield}/>
                <br/>
                <TextField label="DNI" className={styles.textfield}/>
                <br/>
                <TextField label="Número de teléfono" className={styles.textfield}/>

                <br></br>
                <div align="right">
                <Button color="primary" onClick={()=>mostrarAlerta()}>Enviar</Button>
                <Button  onClick={()=>abrirCerrarModal()}><Link to='/Donar' style={{
                    textDecoration:'none'
                }}>Cancelar</Link></Button>
                
                </div>
    </div>
)
{
    return(
        <div className="Modalkev" style={{
            color:'skyblue'
        }}>
            <Button className={styles.button}  onClick={()=>abrirCerrarModal()}><h5 style={{
                color:'white',
                position:'relative',
                top:'20px'
            }}>Unirme a este plan</h5></Button>
            <Modal open={modal} onClose={abrirCerrarModal}>
                {body}
            </Modal>
        </div>
    );
}}

export default Modalkev