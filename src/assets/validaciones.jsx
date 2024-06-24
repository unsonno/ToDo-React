import { getData, postData, deleteData, putData } from "./fetch.js"


export let validarVacio = (...inputs) => {
  let validacion = {
    mensaje : "",
    error: false,
  };
  inputs.forEach(input => {
    if (input.trim() === "") {
      validacion.mensaje = "Por favor llene los campos.";
      validacion.error = true;
    }
  });
  return validacion;
}

export let validarEspaciosVacios = (...inputs) => {
    let validacion = {
      mensaje : "",
      error: false,
    };
}