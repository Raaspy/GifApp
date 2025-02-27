import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading ? (<h2>Cargando</h2>) : null //Condicional para comprobar el isLoading
            }
            

            <div className='card-grid'>
                {
                    images.map( (image) => {
                        return <GifGridItem 
                            key={image.id}
                            { ...image }/>})
                }
            </div>
        </>
    )
}