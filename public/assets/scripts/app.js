document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display profile info from GitHub
    fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME')
        .then(response => response.json())
        .then(data => {
            document.getElementById('profile-info').innerHTML = `
                <img src="${data.avatar_url}" alt="Profile Picture">
                <h3>${data.name}</h3>
                <p>${data.bio}</p>
                <a href="mailto:${data.email}">Email</a>
                <a href="${data.blog}">Blog</a>
            `;
        });

    // Fetch and display repositories from GitHub
    fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos')
        .then(response => response.json())
        .then(repos => {
            let repoCards = repos.map(repo => `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${repo.name}</h5>
                        <p class="card-text">${repo.description}</p>
                        <a href="${repo.html_url}" class="btn btn-primary">Go to Repository</a>
                    </div>
                </div>
            `).join('');
            document.getElementById('repo-cards').innerHTML = repoCards;
        });

    // Fetch and display content from JSONServer
    fetch('http://localhost:3000/albums')
        .then(response => response.json())
        .then(albums => {
            let carouselItems = albums.map((album, index) => `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${album.coverUrl}" class="d-block w-100" alt="${album.title}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${album.title}</h5>
                        <p>${album.description}</p>
                    </div>
                </div>
            `).join('');
            document.getElementById('content-carousel').innerHTML = `
                <div class="carousel-inner">
                    ${carouselItems}
                </div>
                <a class="carousel-control-prev" href="#content-carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#content-carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            `;
        });

    // Fetch and display colleagues from JSONServer
    fetch('http://localhost:3000/colleagues')
        .then(response => response.json())
        .then(colleagues => {
            let colleagueGrid = colleagues.map(colleague => `
                <div class="col-4">
                    <div class="card">
                        <img src="${colleague.photoUrl}" class="card-img-top" alt="${colleague.name}">
                        <div class="card-body">
                            <h5 class="card-title">${colleague.name}</h5>
                            <a href="${colleague.githubProfileUrl}" class="btn btn-primary">GitHub Profile</a>
                        </div>
                    </div>
                </div>
            `).join('');
            document.getElementById('colleague-grid').innerHTML = colleagueGrid;
        });
});
