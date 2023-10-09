import { useState, useEffect } from "react"


const ItemListContainer = ({nombre}) => {
  const [mostrarSaludo, setMostrarSaludo] = useState(false);
  const [contador, setContador] = useState(0)
  const ss = () => {
    setMostrarSaludo(!mostrarSaludo)
  }

  useEffect(() => {
    setContador(contador + 1)
  },[mostrarSaludo])
  useEffect(() => {
    setContador(contador) //por unica vez reinicializo el contador cuando se monta para que sea = 0
  },[])
    return(
        <>
        <button onClick={ss} className="botonSaludo">¡PULSAME!</button>
        {mostrarSaludo && <p className="saludo">{nombre}</p>}
        {(contador>=10) && <p className="alarmaSaludos">Deja el botón en paz... Por favor</p>}
        <p>Veces que se apretó el botón: {contador}</p>
        </>
    )
}

    
    export default ItemListContainer