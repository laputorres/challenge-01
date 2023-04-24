//Variables a utilizar
var bottonEncriptar = document.querySelector(".encriptar");
var bottonDesencriptar = document.querySelector(".desencriptar");
var textEncriptado = document.getElementById("texto-encriptado");
var mensajeEncontrado = document.getElementById("sin-mensaje");
var textoIngresado = document.getElementById("text-area");
//Caracteres para validar y vocales a encriptar
const formato = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~áóúéí´]/;
var letrasEncriptadas = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

//Funcion al hacer click al botón ENCRIPTAR
bottonEncriptar.addEventListener("click", function () {
  let text = textoIngresado.value.toLowerCase();
  //Validar si ingreso caracteres especiales
  if (formato.test(text)) {
    alertify.alert("No puedes ingresar caracteres especiales");
  } else {
    //Cambiar los valores de las vocales para encriptar
    textoFormateado = text.replace(/a|e|i|o|u/g, function (tipoLetra) {
      return letrasEncriptadas[tipoLetra];
    });
    //ocultar ningun mensaje encontrado
    if (textoIngresado.value == ""){
      alertify.alert('',"Ingresa un texto");
    } else{
      mensajeEncontrado.classList.add("hidden");
    }
  }
  //Insertar el resultado en el cuadro blanco y limpiar el textarea
  textEncriptado.innerHTML = textoFormateado;
  textoIngresado.value = "";
  console.log(textoFormateado);
});

//Funcion al hacer click al botón DESENCRIPTAR
bottonDesencriptar.addEventListener("click", function () {
  //Invertir los valores de las vocales
  const letrasDesencriptadas = [];
  for (let letra in letrasEncriptadas) {
    const valorEncriptado = letrasEncriptadas[letra];
    letrasDesencriptadas[valorEncriptado] = letra;
  }
  //Desencriptar el texto
  var textoDesencriptado = textEncriptado.innerHTML.replace(
    /ai|enter|imes|ober|ufat/g,
    function (tipoLetra1) {
      return letrasDesencriptadas[tipoLetra1];
    }
  );
  //insertar el texto desencriptado en el textarea
  textoIngresado.value = textoDesencriptado;

  //Mostrar ningun mensaje encontrado y limpiar el cuadro
  mensajeEncontrado.classList.remove("hidden");
  textEncriptado.innerHTML = "";
});
