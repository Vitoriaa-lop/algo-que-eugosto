// Seleciona os elementos do HTML
const cards = document.querySelectorAll('.action-card');
const modal = document.getElementById('modal-acao');
const modalTitulo = document.getElementById('modal-titulo');
const modalTexto = document.getElementById('modal-texto');
const closeBtn = document.querySelector('.close-btn');

// Adiciona evento de clique a cada bloco de ação
cards.forEach(card => {
  card.addEventListener('click', () => {
    const nomeSecao = card.getAttribute('data-secao');
    
    // Atualiza o conteúdo do alerta com o nome do bloco clicado
    modalTitulo.innerText = nomeSecao;
    modalTexto.innerText = `Você clicou para abrir a seção: ${nomeSecao}. Aqui você pode carregar novos detalhes!`;
    
    // Exibe o modal na tela
    modal.style.display = 'flex';
  });
});

// Fecha o modal ao clicar no botão "X"
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fecha o modal se o usuário clicar fora da caixa do modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});