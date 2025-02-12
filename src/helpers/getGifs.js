export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search/?api_key=2mNmy9koMXHLFvRPpb9uJJslCW1nN3Ry&q=${ category }&limit=10`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gif = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    console.log(gif);
    return gif;
}