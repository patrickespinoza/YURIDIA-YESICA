import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Vestimenta from "./componentes-encabezado/vestimenta";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";
import ConfirmacionAsistencia from "./componentes-encabezado/confirmacion";
import ImagenPantallaCompleta from "./componentes-encabezado/imagen";

export default function Itinerario() {

  return (
    <div>

      <Novios />
    
      <Celebracion/>

      <Vestimenta />

      <Intinerario2/>

      <ImagenPantallaCompleta/>

      <ConfirmacionAsistencia/>
    </div>
  );
}