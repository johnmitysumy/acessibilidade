let tamanhoFonte = 100;

function ajustarFonte(acao) {
  if (acao === '+') tamanhoFonte += 5;
  else tamanhoFonte -= 5;
  tamanhoFonte = Math.min(Math.max(tamanhoFonte, 50), 200);

  const elementos = document.querySelectorAll('body *:not(#painel-acessibilidade):not(#painel-acessibilidade *)' +
    ':not(#btn-acessibilidade):not(#btn-acessibilidade *)');

  elementos.forEach(el => {
    el.style.fontSize = tamanhoFonte + '%';
  });
}

function toggleClass(classe) {
  document.body.classList.toggle(classe);
}

function resetAcessibilidade(event) {
  if(event) event.preventDefault();
  
  const elementos = document.querySelectorAll('body *:not(#painel-acessibilidade):not(#painel-acessibilidade *)' +
    ':not(#btn-acessibilidade):not(#btn-acessibilidade *)');

  elementos.forEach(el => {
    el.style.fontSize = '';
  });

  document.body.className = '';
  tamanhoFonte = 100;
}

function togglePainelAcessibilidade() {
  const painel = document.getElementById('painel-acessibilidade');
  painel.style.display = (painel.style.display === 'none' || painel.style.display === '') ? 'block' : 'none';
}



let leituraAtiva = false;

function Leitura() {
  leituraAtiva = !leituraAtiva;
  
  const elementos = document.querySelectorAll('body *:not(script):not(style):not(#painel-acessibilidade *):not(#btn-acessibilidade)');
  
  elementos.forEach(el => {
    if (leituraAtiva) {
      el.addEventListener('mouseenter', iniciarLeitura);
    } else {
      el.removeEventListener('mouseenter', iniciarLeitura);
    }
  });
}

function iniciarLeitura(event) {
  const texto = event.target.innerText || event.target.alt || '';
  if (!texto) return;
  window.speechSynthesis.cancel(); // cancela leitura anterior
  const utterance = new SpeechSynthesisUtterance(texto);
  window.speechSynthesis.speak(utterance);
}

function desativarLeitura() {
  leituraAtiva = false;
  window.speechSynthesis.cancel();

  const elementos = document.querySelectorAll('body *:not(script):not(style):not(#painel-acessibilidade *):not(#btn-acessibilidade)');

  elementos.forEach(el => {
    el.removeEventListener('mouseenter', iniciarLeitura);
  });
}
