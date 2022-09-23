import React from "react";
import "../stylesheets/Thebestsix.css";

function Thebestsix(props){
  return(
    <div className="contenedor-thebestsix">
      <img className="imagen-thebestsix"
      src={require(`../imagenes/thebestsix-${props.imagen}.png`)}
      alt="foto del pokemon" />
      <div className="contenedor-texto-thebestsix">
        <p className="nombre-thebestsix"><strong>{props.nombre}</strong></p>
        <p className="tipos-thebestsix">{props.tipo1} 
        <img 
          className="logo-thebestsix"
          src={require(`../logotipos/thebestsix - ${props.logo1}.png`)}
          alt="logo del tipo1" /> {props.tipo2} 
        <img 
          className="logo-thebestsix"
          src={require(`../logotipos/thebestsix - ${props.logo2}.png`)} 
          alt="logo del tipo2" /> </p>
        <p className="ventajadetipo-thebestsix">V: {props.ventajadetipo}</p>
        <p className="desventajadetipo-thebestsix">D: {props.desventajadetipo}</p>
        <p className="pokedex-thebestsix">"{props.pokedex}"</p>
      </div>
    </div>
  );
}

export default Thebestsix;