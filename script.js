// Dados das borboletas para abrir dinamicamente no Guia de Espécies
const especies = [
  {
    nome: "Borboleta-Monarca",
    imagem: "img/Borboleta-Monarca.jpg",
    ondeEncontrar: "Américas (da América do Norte até a América do Sul, incluindo o Brasil) em jardins, campos abertos e parques.",
    curiosidade: "Famosa por realizar uma das maiores migrações do reino animal, percorrendo milhares de quilômetros do Canadá até o México. Suas larvas alimentam-se de plantas tóxicas (algodãozinho), tornando a borboleta adulta venenosa para predadores."
  },
  {
    nome: "Borboleta-Azul-Morpho",
    imagem: "img/Borboleta-Azul-Morpho.png",
    ondeEncontrar: "Florestas tropicais da América Central e do Sul, sendo muito comum na Amazônia e na Mata Atlântica.",
    curiosidade: "Suas asas não possuem pigmento azul verdadeiro. A cor brilhante vem do fenômeno de iridescência estrutural: microscópicas escamas nas asas refletem a luz do sol de forma a criar esse tom intenso de azul."
  },
  {
    nome: "Borboleta-Olho-de-Coruja",
    imagem: "img/Borboleta-Olho-de-Coruja.png", // <--- Corrigido para .png!
    ondeEncontrar: "Florestas tropicais úmidas e bananais da América Central e do Sul.",
    curiosidade: "É uma das maiores borboletas das Américas. A parte inferior de suas asas apresenta mancha redonda similar aos olhos de uma coruja ou sapo, recurso de mimetismo usado para assustar pequenos predadores como pássaros."
  },
  {
    nome: "Borboleta-Asa-de-Vidro",
    imagem: "img/Borboleta-Asa-de-Vidro.png",
    ondeEncontrar: "Florestas tropicais da América Central e do Sul, desde o México até o Brasil.",
    curiosidade: "O tecido entre as veias de suas asas não possui as escamas coloridas tradicionais, tornando-as quase totalmente transparentes. Esse mecanismo de camuflagem permite que ela se confunda com o ambiente enquanto voa, tornando-se invisível para a maioria dos predadores."
  },
  {
    nome: "Borboleta-Folha-Seca",
    imagem: "img/Borboleta-Folha-Seca.png",
    ondeEncontrar: "Florestas da Ásia Tropical, incluindo países como Índia, China, Tailândia e Indonésia.",
    curiosidade: "É um dos exemplos mais perfeitos de mimetismo na natureza. Quando fecha as asas, a parte inferior lembra com precisão uma folha seca marrom, incluindo veias imitadas e marcas que parecem furos de insetos. Quando abre as asas, revela cores vibrantes em azul e laranja."
  },
  {
    nome: "Borboleta-Cauda-de-Andorinha-Gigante",
    imagem: "img/Borboleta-Cauda-de-Andorinha-Gigante.png",
    ondeEncontrar: "Américas, do sul do Canadá até a América do Sul, comum em pomares e jardins.",
    curiosidade: "É a maior borboleta dos Estados Unidos e Canadá. Suas lagartas têm uma tática defensiva bastante peculiar: além de se parecerem com excrementos de pássaros para evitar predadores, podem projetar um órgão glandular vermelho e cheiroso (osmetério) se forem ameaçadas."
  },
  {
    nome: "Borboleta-Smaragdina",
    imagem: "img/Borboleta-Smaragdina.png",
    ondeEncontrar: "Regiões tropicais da Ásia e da Oceania (Índia, Sudeste Asiático e Austrália).",
    curiosidade: "Conhecida por seu voo extremamente rápido e arisco, esta borboleta tem asas pretas salpicadas de manchas verde-maçã brilhantes. Dificilmente fica parada por muito tempo, alimentando-se do néctar enquanto bate as asas continuamente no ar."
  }
];

// Clique nos cards
const cards = document.querySelectorAll('.action-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const nomeSecao = card.getAttribute('data-secao');
    
    if (nomeSecao === 'Guia de Espécies') {
      abrirGuiaEmNovaAba();
    } else {
      alert(`Você clicou em: ${nomeSecao}`);
    }
  });
});

// Função para abrir o guia em nova aba
function abrirGuiaEmNovaAba() {
  const novaAba = window.open('', '_blank');
  
  let htmlCards = '';
  especies.forEach(esp => {
    htmlCards += `
      <div class="especie-card">
        <img src="${esp.imagem}" alt="${esp.nome}">
        <h2>${esp.nome.replace(/-/g, ' ')}</h2>
        <p class="info-item"><strong>📍 Onde encontrar:</strong> ${esp.ondeEncontrar}</p>
        <p class="info-item"><strong>✨ Curiosidade:</strong> ${esp.curiosidade}</p>
      </div>
    `;
  });

  novaAba.document.write(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Guia de Espécies de Borboletas</title>
      <link rel="stylesheet" href="style.css">
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
      <style>
        body { padding: 40px 20px; }
        .guia-container { max-width: 1100px; margin: 0 auto; z-index: 2; position: relative; }
        .guia-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 30px; }
        .especie-card { background: rgba(255, 255, 255, 0.92); border-radius: 15px; padding: 20px; border: 1px solid rgba(35, 78, 53, 0.2); box-shadow: 0 8px 20px rgba(0,0,0,0.08); text-align: center; }
        .especie-card img { width: 100%; height: 200px; object-fit: cover; border-radius: 10px; border: 2px solid rgba(255, 255, 255, 0.8); }
        .especie-card h2 { font-family: 'Cormorant Garamond', serif; color: #1b3d29; font-size: 1.6rem; margin: 15px 0 10px 0; }
        .info-item { font-size: 0.9rem; text-align: left; line-height: 1.5; margin-bottom: 10px; color: #2b332c; }
        .back-btn { display: inline-block; margin-bottom: 20px; padding: 10px 20px; background: #1b3d29; color: #fff; text-decoration: none; border-radius: 20px; font-weight: 600; cursor: pointer; border: none; }
      </style>
    </head>
    <body>
      <div class="guia-container">
        <button class="back-btn" onclick="window.close()">&larr; Fechar Aba</button>
        <header class="header">
          <h1>Guia de Espécies</h1>
          <p class="subtitle">Conheça algumas das borboletas mais fascinantes da natureza</p>
        </header>
        <div class="guia-grid">
          ${htmlCards}
        </div>
      </div>
    </body>
    </html>
  `);
  
  novaAba.document.close();
}