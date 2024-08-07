// Función para encriptar el texto
function encriptarTexto() {
  // Obtiene el texto original del área de entrada
  let textoOriginal = document.getElementById("encryptInput").value;
  
  // Obtiene referencias a los elementos de resultado
  let tituloResultado = document.getElementById("resultTitle");
  let parrafoResultado = document.getElementById("resultParagraph");
  let imagenResultado = document.getElementById("resultImage");
  
  // Realiza la encriptación reemplazando vocales con palabras clave
  let textoEncriptado = textoOriginal
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  
  // Verifica si se ingresó texto
  if (textoOriginal.length != 0) {
    // Actualiza el área de entrada con el texto encriptado
    document.getElementById("encryptInput").value = textoEncriptado;
    
    // Actualiza la sección de resultados
    tituloResultado.textContent = "Texto encriptado con éxito";
    parrafoResultado.textContent = "";
    imagenResultado.src = "./assets/exito.png";
  } else {
    // Si no se ingresó texto, muestra un mensaje de error
    imagenResultado.src = "./assets/NoFound.png";
    tituloResultado.textContent = "Parece que no hay nada aquí";
    parrafoResultado.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    
    // Muestra una alerta personalizada con SweetAlert
    swal("Vaya!", "Debes ingresar un texto", "warning");
  }
}

// Función para desencriptar el texto
function desencriptarTexto() {
  // Obtiene el texto encriptado del área de entrada
  let textoEncriptado = document.getElementById("encryptInput").value;
  
  // Obtiene referencias a los elementos de resultado
  let tituloResultado = document.getElementById("resultTitle");
  let parrafoResultado = document.getElementById("resultParagraph");
  let imagenResultado = document.getElementById("resultImage");
  
  // Realiza la desencriptación reemplazando las palabras clave con vocales
  let textoDesencriptado = textoEncriptado
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
  // Verifica si se ingresó texto
  if (textoEncriptado.length != 0) {
    // Actualiza el área de entrada con el texto desencriptado
    document.getElementById("encryptInput").value = textoDesencriptado;
    
    // Actualiza la sección de resultados
    tituloResultado.textContent = "Texto desencriptado con éxito";
    parrafoResultado.textContent = "";
    imagenResultado.src = "./assets/desencriptado.png";
  } else {
    // Si no se ingresó texto, muestra un mensaje de error
    imagenResultado.src = "./assets/NoFound.png";
    tituloResultado.textContent = "Parece que no hay nada aquí";
    parrafoResultado.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    
    // Muestra una alerta personalizada con SweetAlert
    swal("Vaya!", "Debes ingresar un texto", "warning");
  }
}

// Agrega el año actual al footer
document.getElementById('year').textContent = new Date().getFullYear();