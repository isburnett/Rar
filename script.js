document.getElementById('proxyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;
    const proxyUrl = `/proxy/${encodeURIComponent(url)}`;
    document.getElementById('proxyIframe').src = proxyUrl;
});
