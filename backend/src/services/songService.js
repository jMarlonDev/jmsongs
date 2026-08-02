import supabase from "../config/supabaseCliente.js";

/*
 La librería de supabase devuelve un array con un bjeto con los datos o un posible error
 en las operaciones

 Array: [{ data... ,  error}]
*/
export async function createSong(songData) {
    if (!songData.title || !songData.author || !songData.content) {
        // Detiene la ejecución si ocurre un error y luego envía ese error para que se atrape en un catch
        throw new Error("The song parameters: title, author, and content ​​are required."); 
    }

    const response = await supabase.from("songs")
    .insert({
        title: songData.title,
        author: songData.author,
        chorus: songData.chorus,
        content: songData.content

    }).select(); // Me trae la fila que se ha creado

    // Error que puede ocurrir al intentar realizar una operación de supabase
    if (response.error) {
        throw new Error(response.error.message); 
    }

    return response.data;
}

export async function getAllSongs() {
    const response = await supabase.from("songs").select("*");

    if (response.error) {
        throw new Error(response.error.message);
    }

    return response.data;
}

export async function getSongById(id) {

    const response = await supabase.from("songs")
    .select()
    .eq("id", id)
    .single();

    if (response.error) {
        throw new Error(response.error.message);
    }

    return response.data;
}

export async function updateSong(id, songData) {
    if (!songData.title || !songData.author || !songData.content) {
        // Detiene la ejecución si ocurre un error y luego envía ese error para que se atrape en un catch
        throw new Error("To update the song, one of these parameters cannot be empty: title, author, and content");
    }

    const response = await supabase.from("songs")
        .update({
            title: songData.title,
            author: songData.author,
            chorus: songData.chorus,
            content: songData.content
        })
        .eq("id", id)
        .select()
        .single();

    if (response.error) {
        throw new Error(response.error.message);  
    }

    return response.data;
}

export async function deleteSong(id) {
    
    const error = await supabase.from("songs").delete().eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    return { success: true, message: "Song deleted successfully" };
}