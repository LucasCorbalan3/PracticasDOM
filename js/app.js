const ComenzarJuego = () => {
  let ContenedorPadre = document.querySelector("#ContenedorPadre");
  return (ContenedorPadre.innerHTML += `
    <input id="input" class="container my-2" type="number" placeholder="ADIVINA CUAL ES EL NUMERO MAGICO ENTRE EL 1 Y EL 100" maxlength="2" required>
</div><br><button class="btn btnEnviar">ENVIAR RESPUESTA</button>`);
};

const numerorandom = () => {
  let input = document.querySelector("#input");
  if (numerorandom > 50) {
  } else {
  }
};
