import { useState } from "react";
const Ejercicio1 = () => {
  const [selectData, setSelectData] = useState('');

  const dataChange = (event) => {
    setSelectData(event.target.value);
  };

  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione un producto: </label>
      <select onChange={dataChange}>
        <option className="Set de Cables" value="$10"> Set de cables</option>
        <option className="Bateria" value="$50"> Bateria</option>
        <option className="Optica" value="$100"> Optica</option>
      </select>
      <label>Producto:{selectData}</label>
    </div>
  )
}
export default Ejercicio1
