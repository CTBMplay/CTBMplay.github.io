document.addEventListener("DOMContentLoaded", () => {
  const gate = document.getElementById("gate");
  const splash = document.getElementById("splash");
  const btnEnter = document.getElementById("btnEnter");
  const pwdInput = document.getElementById("pwd");
  const err = document.getElementById("err");

  const CORRECT_PWD = "2025CTBM44"; // #OBS: Atualize a senha aqui quando mudar
  const acesso = sessionStorage.getItem("acessoCTFLIX");

  if (acesso === "true") {
    gate.style.display = "none";
    splash.style.display = "none";
  } else {
    gate.style.display = "flex";
    splash.style.display = "none";
  }

  btnEnter.addEventListener("click", () => {
    const pwd = pwdInput.value.trim();
    if (pwd === CORRECT_PWD) {
      sessionStorage.setItem("acessoCTFLIX", "true"); 
      gate.style.display = "none";
      splash.style.display = "flex";

      setTimeout(() => {
        splash.style.display = "none";
      }, 5000);
    } else {
      err.style.display = "block";
    }
  });

  pwdInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") btnEnter.click();
  });

  // ========== EMBARALHAR FILMES ==========
  const scroller = document.querySelector(".scroller");
  if (scroller) {
    const cards = Array.from(scroller.children);
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      scroller.appendChild(cards[j]);
    }
  }
});