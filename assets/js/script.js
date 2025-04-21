// Menu Hamburguer
const menuHamburguer = document.querySelector('.menu-hamburguer');
const navLinks = document.querySelector('.nav-links');

menuHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.toggle('active');
  navLinks.classList.toggle('active');
  
  // Bloqueia o scroll da página quando o menu está aberto
  document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Fecha o menu quando um link é clicado
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuHamburguer.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Carrossel
const imagensCarrossel = [
  "assets/img/5.png",
  "assets/img/6.png",
  "assets/img/7.png",
  "assets/img/8.png"
];
let i = 0;
const carrossel = document.getElementById("carrossel-img");

function trocarImagem() {
  i = (i + 1) % imagensCarrossel.length;
  carrossel.style.opacity = 0;
  setTimeout(() => {
    carrossel.src = imagensCarrossel[i];
    carrossel.style.opacity = 1;
  }, 500);
}

setInterval(trocarImagem, 5000);

// Efeito suave ao rolar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Enviar para WhatsApp
function enviarWhatsapp() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá Dr. João Silva, me chamo ${nome}.\n\nEmail: ${email}\nAssunto: ${assunto}\n\nMensagem: ${mensagem}`;
  const numero = "SEUNUMEROAQUI"; // Substitua pelo número com DDD e sem traços
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  
  window.open(link, "_blank");
  return false;
}