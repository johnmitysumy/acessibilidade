let tamanhoFonte = 100;

function ajustarFonte(acao) {
  if (acao === '+') tamanhoFonte += 10;
  else tamanhoFonte -= 10;
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
