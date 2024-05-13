export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=s67GZs5ufJpHmA0RXc8ByAdAB43uf0Ei&q=${category}&limit=10&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium?.url // Utilizando el operador de encadenamiento opcional
        
    }));
    return gifs;
};

