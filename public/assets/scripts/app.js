// app.js

document.addEventListener('DOMContentLoaded', function() {
    fetchPerfilUsuario();
    fetchRepositorios();
    fetchConteudoSugerido();
    fetchColegasTrabalho();
});

function fetchPerfilUsuario() {
    fetch('https://api.github.com/users/PitiedHarp')
        .then(response => response.json())
        .then(data => {
            document.getElementById('avatar').src = data.avatar_url;
            document.getElementById('nome').textContent = data.name.split(' ')[0];
            document.getElementById('sobrenome').textContent = data.name.split(' ')[1];
            document.getElementById('descricao').textContent = data.bio;
        })
        .catch(error => console.error('Erro ao buscar perfil do usuário:', error));
}

function fetchRepositorios() {
    // Simulação de dados para exemplo
    const repositorios = [
        { nome: 'Repositorio 1', descricao: 'Hydroid' },
        { nome: 'Repositorio 2', descricao: 'Sevagoth' },
        { nome: 'Repositorio 3', descricao: 'Warframe grávido' }
    ];

    const repositoriosLista = document.querySelector('.repositorios-lista');

    repositorios.forEach(repo => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${repo.nome}</h3>
            <p>${repo.descricao}</p>
            <a href="#">Ver Detalhes</a>
        `;
        repositoriosLista.appendChild(card);
    });
}

function fetchConteudoSugerido() {
    // Simulação de dados para exemplo
    const conteudos = [
        { titulo: 'Artigo 1', imagem: './public/assets/img/165703330.jpg' },
        { titulo: 'Vídeo 1', imagem: './public/assets/img/Pichau.jpg' },
        { titulo: 'Infográfico 1', imagem: './public/assets/img/WP3.jpg' }
    ];

    const carouselInner = document.querySelector('.carousel-inner');

    conteudos.forEach((conteudo, index) => {
        const activeClass = index === 0 ? 'active' : '';
        const item = document.createElement('div');
        item.classList.add('carousel-item', activeClass);
        item.innerHTML = `
            <img src="${conteudo.imagem}" class="d-block w-100" alt="${conteudo.titulo}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${conteudo.titulo}</h5>
            </div>
        `;
        carouselInner.appendChild(item);
    });
}

function fetchColegasTrabalho() {
    // Simulação de dados para exemplo
    const colegas = [
        { nome: 'Colega 1', foto: './public/assets/img/download.jpg' },
        { nome: 'Colega 2', foto: './public/assets/img/F90fMJdWEAA8NTV.jpg' },
        { nome: 'Colega 3', foto: './public/assets/img/EN.jpg' }
    ];

    const colegasGrid = document.querySelector('.colegas-grid');

    colegas.forEach(colega => {
        const card = document.createElement('div');
        card.classList.add('colega-card');
        card.innerHTML = `
            <img src="${colega.foto}" alt="${colega.nome}">
            <p>${colega.nome}</p>
        `;
        colegasGrid.appendChild(card);
    });
}

                </div>
            `).join('');
            document.getElementById('colleague-grid').innerHTML = colleagueGrid;
        });
});
