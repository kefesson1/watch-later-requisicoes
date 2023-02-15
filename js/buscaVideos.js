import { conectaAPI } from "./conectaAPI.js";
import  constroiCard  from "./mostrarVideos.js"




async function buscarVideo(evento){
    evento.preventDefault();
    
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaAPI.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector('[data-lista]');

    while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo,elemento.descricao,elemento.url,elemento.imagem)))

    if (busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Nao existem videos com o termo ${dadosDePesquisa}</h2>`
    }

  
}

const botaoPesquisa = document.querySelector('[data-botaoPesquisar');

botaoPesquisa.addEventListener('click', evento => buscarVideo(evento))