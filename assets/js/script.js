// Envio para Google Apps Script
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const data = new FormData(this);
  
    fetch("https://script.google.com/macros/s/SEU_ID_DO_SCRIPT/exec", {
      method: "POST",
      body: data
    })
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      document.getElementById("formulario").reset();
    })
    .catch(() => alert("Erro ao enviar. Tente novamente."));
  });
  