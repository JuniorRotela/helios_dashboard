import axios from 'axios';

const API_URL = 'http://localhost:3000/';

const getDatos = async () => {
  try {
    const response = await axios.get(`${API_URL}owner`);
    // console.log("este es el verdadero", response.data)
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener datos del backend:', error);
  }
};
const getOneDatos = async (id) => {
  try {
    const response = await axios.get(`${API_URL}owner/${id}`);
    //  console.log("este es el verdadero", response.data)
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener datos del backend:', error);
  }
};

const PostDatos = async (datos) => {
  try {
    const response = await axios.post(`${API_URL}owner`, datos);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // Si el error es una respuesta del servidor con un mensaje de error
      throw new Error('Error al enviar datos al backend: ' + error.response.data.message);
    } else {
      // Si el error no es una respuesta del servidor con un mensaje de error
      throw new Error('Error al enviar datos al backend: ' + error.message);
    }
  }
};

const putDatos = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}owner/${id}`, data);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Error al Actualizar los Datos: ');
  }
};

const DeleteDatos = async (id) => {
  try {
console.log("id", id)
    const response = await axios.delete(`${API_URL}owner/${id}`);
     console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Hubo un Error al Intentar Eliminar los datos: ');
  }
};

export { PostDatos, getDatos, getOneDatos, putDatos, DeleteDatos };
