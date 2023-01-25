const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
  campo.addEventListener("invalid", (event) => verificarValidade(event, campo));
  
});

function verificarValidade(evento, campo) {
  //previnir comportamento padrao do submit
  evento.preventDefault();
  addAlertState(campo);
}


function addAlertState(campo) {
  const errorMessage = campo.parentNode.querySelector(
    ".form__input_alert_show"
  );
  const errorIcon = campo.parentNode.querySelector("img");

  errorIcon.classList.remove("alertIcon-hidden");
  errorIcon.classList.add("alertIcon-active");

  campo.classList.add("form__input_invalid-input");

  if (campo.placeholder == "Email Adress") {
    errorMessage.textContent = "Looks like this is not a email";
    campo.placeholder = "email@example/com";
  } else {
    errorMessage.textContent = campo.placeholder + " cannot be empty";
  }
}
