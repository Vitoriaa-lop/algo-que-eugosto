const cards = document.querySelectorAll('.action-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const nomeSecao = card.getAttribute('data-secao');
    
    if (nomeSecao === 'Guia de Espécies') {
      window.open('guia.html', '_blank');
    } else {
      alert(`Você clicou em: ${nomeSecao}`);
    }
  });
});