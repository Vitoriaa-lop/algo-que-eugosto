// Função para abrir o guia em nova aba com estilo refinado
function abrirGuiaEmNovaAba() {
  const novaAba = window.open('', '_blank');
  
  let htmlCards = '';
  especies.forEach(esp => {
    htmlCards += `
      <div class="especie-card">
        <div class="img-container">
          <img src="${esp.imagem}" alt="${esp.nome}">
        </div>
        <div class="card-content">
          <h2>${esp.nome.replace(/-/g, ' ')}</h2>
          <p class="info-item"><strong>📍 Onde encontrar:</strong> ${esp.ondeEncontrar}</p>
          <p class="info-item"><strong>✨ Curiosidade:</strong> ${esp.curiosidade}</p>
        </div>
      </div>
    `;
  });

  novaAba.document.write(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Guia de Espécies — Asas e Cores</title>
      <link rel="stylesheet" href="style.css">
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
      <style>
        body {
          padding: 40px 20px;
          background-color: #f5efe6;
        }

        .guia-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .guia-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.2rem;
          color: #1b3d29;
          margin-bottom: 5px;
        }

        .guia-header p {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1.2rem;
          color: #234e35;
        }

        .guia-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .guia-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
        }

        .especie-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(35, 78, 53, 0.15);
          box-shadow: 0 10px 25px rgba(27, 61, 41, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .especie-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(27, 61, 41, 0.15);
        }

        .img-container {
          width: 100%;
          height: 220px;
          overflow: hidden;
          background-color: #e9e2d7;
        }

        .especie-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .especie-card:hover img {
          transform: scale(1.05);
        }

        .card-content {
          padding: 25px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .especie-card h2 {
          font-family: 'Cormorant Garamond', serif;
          color: #1b3d29;
          font-size: 1.8rem;
          margin-bottom: 15px;
          border-bottom: 1px solid rgba(139, 125, 75, 0.3);
          padding-bottom: 8px;
        }

        .info-item {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 12px;
          color: #2b332c;
        }

        .info-item strong {
          color: #1b3d29;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .back-btn {
          padding: 10px 22px;
          background-color: #1b3d29;
          color: #ffffff;
          border: none;
          border-radius: 30px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .back-btn:hover {
          background-color: #234e35;
        }
      </style>
    </head>
    <body>
      <div class="guia-container">
        <div class="top-bar">
          <button class="back-btn" onclick="window.close()">&larr; Fechar Aba</button>
        </div>
        
        <header class="guia-header">
          <h1>Guia de Espécies</h1>
          <p>Conheça detalhes e curiosidades de cada borboleta</p>
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