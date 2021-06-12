export const getImagen = async() => {

    try {

        const apiKey = 'Ct1vpl4MHgMRwio0OeZNh1fNGEqk4Hwb';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'No existe';
    }
    
    
    
}

 getImagen();



