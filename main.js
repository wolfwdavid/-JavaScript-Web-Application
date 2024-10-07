// main.js
import { fetchDogs, fetchBreedImages } from './api.js';
import { renderImages, clearResults } from './ui.js';

document.getElementById("searchBtn").addEventListener("click", async () => {
    const breed = document.getElementById("breed").value.trim().toLowerCase();
    clearResults();
    try {
        const images = await fetchBreedImages(breed);
        renderImages(images);
    } catch (error) {
        console.error(error);
    }
});

// Load more functionality can be added here as needed
