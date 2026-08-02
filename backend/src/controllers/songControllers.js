
import * as songService from "../services/songService.js";

export async function createSongController(request, response) {
    const songData = request.body;
    
    try {
        const song = await songService.createSong(songData);

        response.status(201).json(song);

    } catch (error) {
        response.status(400).json({error: error.message});
    }
}

export async function getAllSongsController(request, response) {
    try {
        const songs = await songService.getAllSongs();

        response.status(200).json(songs);
    } catch (error) {
        response.status(500).json({error: error.message});
    }
}

export async function getSongByIdController(request, response) {
    const { id } = request.params;

    try {
        const song = await songService.getSongById(id);
        response.status(200).json(song);
    } catch (error) {
        response.status(404).json({error: error.message});
    }
}

export async function updateSongController(request, response) {
    const { id } = request.params;
    const songData = request.body;

    try {
        const song = await songService.updateSong(id, body);
        response.status(200).json(song);
    } catch (error) {
        response.status(400).json({error: error.message});
    }
}

export async function deleteSongController(request, response) {
    const { id } = request.params;

    try {
        const result = await songService.deleteSong(id);
        response.status(200).json(result);
    } catch (error) {
        response.status(400).json({error: error.message});
    }
}