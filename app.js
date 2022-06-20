const html =
  '<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>';
const body = window.document.body;
body.innerHTML = `
<main>
  <h1 style="text-align:center"> Atividade – os dados na programação</h1>
</main>'`;


function extrairHtml(cidade) {
  const cidadeSplited = cidade.split(`<br>`); //Separando o conteudo
  const roteiros = cidade.split(`#`); //Separando por roteiro
  let = content = '';

  this.cidadeNome = cidadeSplited[0].split(`*`)[1];
  const titulo = cidadeSplited[1];
  const desc = cidadeSplited[2];

  content += `<h2>${this.cidadeNome}</h2>`;
  content += `<p>${titulo}</p>`;
  content += `<p>${desc}</p>`;


  roteiros.forEach((roteiro, index) => {
    const roteiroArray = roteiro.split(`;`);
    if (index === 0) return;
    else if (index === 1) {
      // Exibe a qntd de locais do roteiro A
      console.log('a');
      content += `<p>Quantidade de locais no roteiro A:${roteiroArray.length}</p>`;
    } else if (index === 2) {
      // Verifica se e o centro de SP
      if (roteiroArray[0].includes(`Centro`) && window.cidadeNome === `São Paulo`) {
        // Se o local nao for a primeira posicao, exibimos na tela os locais do centro
        roteiroArray.forEach((local, i) => {
          if (i !== 0) {
            console.log('c');
            content += `<p>Local do Centro: ${local.replace(`<br>`, ``)}</p>`;

          }
        });
      } else if (roteiroArray[0].includes(`Downtown`)) {
        // Se o local nao for a primeira posicao, exibimos na tela o nome dos pontos turisticos
        roteiroArray.forEach((local, i) => {
          if (i !== 0 && i !== 4) {
            console.log('d');
            content += `<p>Ponto Turístico de Downtown: ${local}</p>`;
          }
        });
      }
    }
  });

  return content;
}

document.addEventListener('DOMContentLoaded', () => {
  html.split('->').forEach((cidade, index) => {
    if (index === 0) return;
    body.firstElementChild.innerHTML += `<section> ${extrairHtml(cidade)} </section>`;
  });
});
