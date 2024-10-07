// api.js
export async function fetchDogs(breed, page = 1) {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random/10`);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    return data.message;
}

export async function fetchBreedImages(breed) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`);
    if (!response.ok) throw new Error("Failed to fetch breed images");
    const data = await response.json();
    return data.message;
}
