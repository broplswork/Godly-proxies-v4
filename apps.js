function visit() {
    const inputUrl = document.getElementById('urlInput').value;
    const proxyUrl = 'https://www.google.com/search?q=' + encodeURIComponent(inputUrl);
    const proxyFrame = document.getElementById('proxyFrame');
    proxyFrame.src = proxyUrl;
}

fetch('apps.json')
    .then(response => response.json())
    .then(data => {
        const apps = data;

        function displayApps() {
            const appsContainer = document.querySelector('.apps-section');

            apps.forEach(app => {
                const appLink = document.createElement('a');
                appLink.href = '#';
                appLink.textContent = app.name;
                appsContainer.appendChild(appLink);

                const appLogo = document.createElement('img');
                appLogo.src = app.logo;
                appLogo.alt = `${app.name} Logo`;
                appLink.appendChild(appLogo);

                appLink.addEventListener('click', function(event) {
                    event.preventDefault();
                    const proxyUrl = 'https://www.bing.com/search?q=' + encodeURIComponent(app.url);
                    const proxyFrame = document.getElementById('proxyFrame');
                    proxyFrame.src = proxyUrl;
                });
            });
        }

        displayApps();
    })
    .catch(error => console.error('Error fetching apps data:', error));
