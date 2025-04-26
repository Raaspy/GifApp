import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue( target.value ); //Con esto podemos modificar y registrar los datos del usuario desde el input
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        //Validacion del input
        const value = inputValue.trim();
        if (value.length <= 1) return;

        
        onNewCategory( inputValue.trim().toLowerCase() ); //Con esto enviamos el input revisado y  al arreglo en la GiftApp y posterior limpiamos el valor de la busqueda.
        setInputValue('');
        // setCategories(categories => [inputValue, ...categories]); / Forma antigua
    }

    return (

        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange } //Con esto podemos modificar y registrar los datos del usuario desde el input
            />
        </form>
    )
}