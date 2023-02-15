async function listaVideos (){
    const conexao = await (await fetch("http://localhost:3000/videos")).json();
    return conexao;
}

async function criaVideo (titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            titulo:titulo,
            descricao:`${descricao} mil visualizacoes`,
            url:url,
            imagem:imagem,
        })
    });
    if(!conexao.ok){
        throw Error("Nao foi possivel enviar o video");
    }
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function buscaVideo (termoBusca) {
    const conexao = await fetch(`http://localhost:3000/videos/?q=${termoBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaAPI = {
    listaVideos,
    criaVideo,
    buscaVideo,
}