// app.js
document.addEventListener('DOMContentLoaded', function() {
    fetchGitHubData();
    fetchJSONServerData();
});

// Função para buscar dados do GitHub e preencher a seção de Perfil e Repositórios
function fetchGitHubData() {
    const username = 'seu_username'; // Substitua pelo seu nome de usuário do GitHub

    // Endpoint para informações do usuário
    fetch(`https://api.github.com/users/${PitiedHarp}`)
        .then(response => response.json())
        .then(data => {
            const { avatar_url, name, bio, html_url } = data;

            // Preenche informações do perfil
            document.getElementById('avatar').src = avatar_url;
            document.getElementById('nome').textContent = name;
            document.getElementById('descricao').textContent = bio;
            document.getElementById('linkedin').href = html_url;
        })
        .catch(error => console.error('Erro ao buscar dados do GitHub:', error));

    // Endpoint para listar repositórios públicos do usuário
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`)
        .then(response => response.json())
        .then(data => {
            const repositoriosLista = document.querySelector('.repositorios-lista');

            // Limpa a lista de repositórios
            repositoriosLista.innerHTML = '';

            // Preenche os cards de repositórios
            data.forEach(repo => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description}</p>
                    <p>Linguagem: ${repo.language}</p>
                    <p>Estrelas: ${repo.stargazers_count}</p>
                    <p>Forks: ${repo.forks_count}</p>
                    <a href="${repo.html_url}" target="_blank">Ver Repositório</a>
                `;
                repositoriosLista.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao buscar repositórios do GitHub:', error));
}

// Função para buscar dados do JSON Server e preencher a seção de Conteúdo Sugerido e Colegas de Trabalho
function fetchJSONServerData() {
    // Endpoint para informações de conteúdo sugerido
    fetch('http://localhost:3000/suggested_content')
        .then(response => response.json())
        .then(data => {
            const carouselInner = document.querySelector('.carousel-inner');

            // Limpa o carrossel
            carouselInner.innerHTML = '';

            // Preenche os itens do carrossel
            data.forEach((item, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (index === 0) {
                    carouselItem.classList.add('active');
                }
                carouselItem.innerHTML = `
                    <img src="${item.image}" class="d-block w-100" alt="${item.title}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${item.title}</h5>
                        <p>${item.description}</p>
                    </div>
                `;
                carouselInner.appendChild(carouselItem);
            });
        })
        .catch(error => console.error('Erro ao buscar conteúdo sugerido:', error));

    // Endpoint para informações de colegas de trabalho
    fetch('http://localhost:3000/work_colleagues')
        .then(response => response.json())
        .then(data => {
            const colegasGrid = document.querySelector('.colegas-grid');

            // Limpa a grade de colegas
            colegasGrid.innerHTML = '';

            // Preenche a grade de colegas
            data.forEach(colega => {
                const colegaCard = document.createElement('div');
                colegaCard.classList.add('colega');
                colegaCard.innerHTML = `
                    <img src="${colega.avatar}" alt="${colega.name}">
                    <p>${colega.name}</p>
                    <p>${colega.position}</p>
                `;
                colegasGrid.appendChild(colegaCard);
            });
        })
        .catch(error => console.error('Erro ao buscar colegas de trabalho:', error));
}
