const apiKey = import.meta.env.VITE_API_KEY;

export const getGifs = async(category) => {

    
    const url = `https://api.giphy.com/v1/gifs/search/?api_key=${ apiKey }&q=${ category }&limit=10`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gif = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url
    }));
    return gif;
}