import React from 'react'
import { Box, Button, TextField, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from '../components/Header';


export const Login = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (

    
     <Box sx={{
        // backgroundColor: colors.blueAccent[800],
        background:"#223051",
        height:"550px",
        width:"700px",
        margin:"auto",
        marginTop:"100px",
        boxShadow:"0 0 5px 0px #000000",
        borderRadius:"10px"
     }}>
       <Box sx={{
        paddingTop:"10px",
        paddingLeft:"50px",
       fontSize:"20px",
        display:"flex",
        justifyContent:"space-between",
        marginRight:"80px",
        marginBottom:"-20px"
       }}>
        <h1>Iniciar Sesion</h1>
        <img className='logo' 
        style={{
            width:"250px",
            height:"100px",
            marginTop:"35px"
        }} 
        src="../../assets/helios12.png" alt="logo" />
       </Box>
       <Box sx={{
        paddingLeft:"50px",
       fontSize:"20px",
       display:"flex",
       flexDirection:"column",


       "& input": {
            height:"42px",
            width:"90%",
            border:"none",
            borderRadius:"8px",
            marginTop:"5px",
            marginBottom:"15px",
            fontSize:"18px"
          },
          "& input:hover": {
            border:"3px solid rgb(98 102 241)"
          },
       }}>
        <label htmlFor="">Nombre de Usuario</label>
        <input className='input' id='user' type="text" placeholder='Ingrese su Usuario'/>
        <label htmlFor="">Contraseña</label>
        <input className='input' id='password' type="text" placeholder='Ingrese su Contraseña'/>
       
       </Box>
       <Box sx={{
        paddingLeft:"50px",
        display:"flex",
        justifyContent:"space-between",
        marginRight:"80px",
        fontSize:"25px",
        marginTop:"20px",
         "& button":{
            height:"50px",
            width:"180px",
            borderRadius:"8px",
            background:"rgb(98 102 241)",
            border:"none",
            color:"#ffffff",
            fontSize:"20px"
         },
         "& button:hover":{
            background:"rgb(62, 62, 174)",
         },

         "& label":{
            fontSize:"22px",
            marginTop:"10px",
         }
       }}>
       <button className='button'>Iniciar Sesion</button>
       <label htmlFor="Registrarse" className='label'>Registrarse</label>
       </Box>
     </Box>
  )
}
