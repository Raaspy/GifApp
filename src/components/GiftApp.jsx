import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GiftApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) => {
        console.log(categories);
        if ( categories.includes(newCategory) ) return; //Validador de duplicidad del Valores.

        setCategories([newCategory, ...categories ]);
        //setCategories( cat => [...cat, 'Valorant'] ); / Forma antigua
    }

    
    return (
        <>
            <h1>Gift App</h1>

            <AddCategory onNewCategory = { value => onAddCategory(value) }
            //setCategories={ setCategories } / Forma antigua
            />

            { categories.map( category => {
                return ( <GifGrid
                    key= { category }
                    category = { category }/>)
                })
            }
            
        </>
    )
}
// <li key={ category }>{ category }</li>
export default GiftApp
