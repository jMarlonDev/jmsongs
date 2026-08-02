/**
 * Centraliza todas las llamadas fetch hacia la API de Express para las operaciones de las canciones
 */


const API_URL = "http://localhost:5600/api/songs";

export async function getAllSongs() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Error retrieving songs");
    }

    return response.json();
}

export async function getSongById(id) {
    const response  = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("song not found");
    }

    return response.json();
}

export async function createSong(songData) {
    const response = await fetch(API_URL,
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(songData)
    });

    if (!response.ok) {
        throw new Error("Error creating a song");
        
    }

    return response.json();
}

export async function updateSong(id, songData) {
    const response = await fetch(API_URL, 
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(songData)
        });

    if (!response.ok) {
        throw new Error("Error updating the song");   
    }

    return response.json();
}

export async function deleteSong(id) {
    const response = await fetch(API_URL, 
        {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });

    if (!response.ok) {
        throw new Error("Error deleting the song");
    }

    return response.json();
}