import {useState} from "react"



export const ComponentApp = () => {

    const categories = ['first category', 'second category']

    const [value, setValue] = useState(categories);

    const obtener = (event) => {
        let nueva = document.getElementById('categoria');
        setValue(event.target.value);
    }

    return (
        <>
        <h1>GifExpert</h1>
        <input type="text" name="" id="categoria"/>
        <button onClick={() => obtener()}> Agregar </button>
        <ol>
            {
                categories.map(
                    (category,key) =>{
                        return <li key={key}>{ category }</li>
                    }
                )
            }
        </ol>
        
        </>


    )
}