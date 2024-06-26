document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const repoId = urlParams.get('id');

    fetch(`https://api.github.com/repositories/${repoId}`)
        .then(response => response.json())
        .then(repo => {
            document.getElementById('repo-details').innerHTML = `
                <h2>${repo.name}</h2>
                <p>${repo.description}</p>
                <p>Created on: ${new Date(repo.created_at).toLocaleDateString()}</p>
                <img src="${repo.owner.avatar_url}" alt="Owner Avatar">
                <p>Owner: <a href="${repo.owner.html_url}">${repo.owner.login}</a></p>
                <p>Language: ${repo.language}</p>
                <p>Stars: ${repo.stargazers_count}</p>
                <p>Watchers: ${repo.watchers_count}</p>
                <p>Forks: ${repo.forks_count}</p>
                <p>License: ${repo.license ? repo.license.name : 'No license'}</p>
                <a href="${repo.html_url}" class="btn btn-primary">Go to Repository</a>
            `;
        });
});
