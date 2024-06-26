import React, { useState } from 'react';

export default function Ejercicio2() {
  const [formData, setFormData] = useState({
    producto: '',
    precio: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const precio = (formData.precio);

    if (!isNaN(precio)) {
      if (precio > 50) {
        alert(`El producto ${formData.producto} cuesta ${precio} pesos y es caro.`);
      } else {
        alert(`El producto ${formData.producto} cuesta ${precio} pesos y es barato.`);
      }
    } else {
      alert('Por favor ingrese un precio válido.');
    }
  };

  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="producto">Producto:</label>
          <input
            type="text"
            id="producto"
            name="producto"
            value={formData.producto}
            onChange={handleInputChange}
            
          />
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={formData.precio}
            onChange={handleInputChange}
            
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
