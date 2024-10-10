function adicionarProduto(nome, descricao, imgSrc, preco) {
    const produtoInfo = document.getElementById('produtoInfo');

    // criar elementos na pagina:
    const titulo = document.createElement('h2');
    titulo.textContent = nome;

    const paragrafo = document.createElement('p');
    paragrafo.textContent = descricao;

    const imagem = document.createElement('img');
    imagem.src = imgSrc;
    imagem.alt = `Imagem de ${nome}`;
    imagem.style.width = '200px'; 

    const precoElemento = document.createElement('p');
    precoElemento.textContent = `Preço: R$ ${preco.toFixed(2)}`;

    // Adicionando os elementos à div produtoInfo
    produtoInfo.appendChild(titulo);
    produtoInfo.appendChild(paragrafo);
    produtoInfo.appendChild(imagem);
    produtoInfo.appendChild(precoElemento);
}


window.onload = function() {
    adicionarProduto(
        'Chocolate Ao Leite',
        'Delicioso chocolate ao leite com 35% de cacau.',
        'img/lindt.webp', // colocar aqui a imagem do chati :)
        9.99
    );
};