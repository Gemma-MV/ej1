import React, { useState } from 'react';

const App = () => {
  const [response, setResponse] = useState('');  // Estado para almacenar la respuesta del servidor

// Función para realizar la solicitud a la API
  const fetchData = async (method) => {
    try {
      const res = await fetch('http://localhost:5000/api/endpoint', {
        method: method,  // Define el método de la solicitud (GET, POST, PUT, PATCH, DELETE)
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const text = await res.text();  // Convertir la respuesta a texto
      setResponse(text);  // Actualizar el estado con la respuesta
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('Error fetching data');  // En caso de error, mostrar el mensaje
    }
  };

  return (
    <div>
      <h1>API REST con Node.js y React</h1>
      <button onClick={() => fetchData('GET')}>GET</button>
      <button onClick={() => fetchData('POST')}>POST</button>
      <button onClick={() => fetchData('PUT')}>PUT</button>
      <button onClick={() => fetchData('PATCH')}>PATCH</button>
      <button onClick={() => fetchData('DELETE')}>DELETE</button>
      <p>Respuesta del servidor: {response}</p>
    </div>
  );
};

export default App;