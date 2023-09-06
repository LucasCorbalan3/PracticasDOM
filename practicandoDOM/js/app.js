const ComenzarJuego = () => {
  let ContenedorPadre = document.querySelector("#ContenedorPadre");
  if (ContenedorPadre.innerHTML === "COMENZAR EL JUEGO") {
    return (ContenedorPadre.innerHTML += `<div class="form-floating mt-4 mb-1 form">
    <input type="number" class="form-control" id="floatingInput" required>
    <label for="floatingInput" maxlength="10">Ingresa un numero</label>
</div><br><button class="btn btn-dark">Enviar Respuesta</button>`);
  }
};
