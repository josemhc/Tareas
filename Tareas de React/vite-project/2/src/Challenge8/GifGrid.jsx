
import React, { useState, useEffect } from 'react';
import { getGifs } from './getGifts';

export const GifGrid = ({ category }) => {
  const [gifList, setGifList] = useState([]);
  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const gifs = await getGifs(category);
        setGifList(gifs);
      } catch (error) {
        console.error("Error ejecución", error);
      }
    };

    fetchGifs();
  }, [category]);

  const handleDeleteGif = (id) => {
    const updatedGifList = gifList.filter(gif => gif.id !== id);
    setGifList(updatedGifList);
 
  };

  return (
    <>
      <h3>{category}</h3>
      <div className="gif-list">
        {gifList.map((gif) => (
          <div key={gif.id} className="gif-item">
            <img src={gif.url} alt={gif.title} />
            <p>{gif.title}</p>
            <button onClick={() => handleDeleteGif(gif.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
