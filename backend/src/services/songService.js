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

