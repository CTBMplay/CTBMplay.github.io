

document.addEventListener("DOMContentLoaded", () => {
  const acesso = sessionStorage.getItem("acessoCTFLIX");
  if (acesso !== "true") {
    window.location.href = "index.html";
    return;
  }


  const params = new URLSearchParams(window.location.search);
  const titulo = params.get("titulo") || "Filme Desconhecido";

  document.title = `${titulo} — CTFLIX`;


  const tituloEl = document.querySelector(".filme-titulo");
  if (tituloEl) tituloEl.textContent = titulo;
});