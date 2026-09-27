document.getElementById("suggestion").addEventListener("submit", function (event) {
  event.preventDefault();
  var note = document.getElementById("form-note");
  if (!this.reportValidity()) return;
  note.textContent = "Le formulaire est prêt, mais l’adresse de réception n’est pas encore indiquée. Votre message n’a pas été envoyé. En attendant, vous pouvez écrire à l’UD FO Aveyron.";
  note.classList.remove("d-none");
});
