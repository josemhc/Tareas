
import { useState } from 'react';


export const ComponentApp = (value) => {
    const [category, setCategory] = useState(value);
    const [categories, setCategories] = useState(['first category', 'second category']);

    const handleAdd = () => {
        setCategories([...categories, category]);
        setCategory('');
    };

    return (
        <>
            <h1>Componente </h1>
            
            <ol>
                {categories.map((category, key) => {
                    return <li key={key}>{category}</li>;
                })}
            </ol>
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button onClick={handleAdd}>Agregar</button>
        </>
    );
};

    


