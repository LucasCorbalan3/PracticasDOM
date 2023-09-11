const ComenzarJuego = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  let ContenedorPadre = document.querySelector("#ContenedorPadre");
  return (ContenedorPadre.innerHTML += `
    <input id="input" class="container my-2" type="number" placeholder="ADIVINA CUAL ES EL NUMERO MAGICO ENTRE EL 1 Y EL 100" maxlength="2" required>
</div><br><button class="btn btnEnviar" type="button" onclick='EnviarRespuesta()' id="BtnEnviar">ENVIAR RESPUESTA</button>`);
};

