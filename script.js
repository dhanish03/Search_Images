const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const container = document.getElementById("image-container");

// Enter the Unsplash API endpoint and your own api key
const apiEndpoint = "https://api.unsplash.com/search/photos";
const apiKey = "GFx2af6SRlBC-hU35ozWlAq-grRCDnp_m3IwEAT1IdY";

fetch()
function fetchImages(query) {
    container.innerHTML = "";
    const url = `${apiEndpoint}?query=${query}&client_id=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(result => {
                const img = document.createElement("img");
                img.setAttribute("src", result.urls.regular);
                container.appendChild(img);
            });
        })
        .catch(error => console.error(error)); 
}

form.addEventListener("submit", event => {
    event.preventDefault();
    const query = input.value;
    fetchImages(query);
});