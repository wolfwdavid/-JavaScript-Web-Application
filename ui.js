// ui.js
export function renderImages(images) {
    const resultsContainer = document.getElementById("results");
    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        resultsContainer.appendChild(imgElement);
    });
}

export function clearResults() {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results
}
