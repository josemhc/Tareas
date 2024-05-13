import { useState, useEffect } from "react";
import { getGifs } from "./getGifts";

export const useFetchGifts = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        try {
            const images = await getGifs(category);
            setImages(images);
            setIsLoading(false);
        } catch (error) {
            console.error("Error al obtener imágenes:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getImages();
    }, [category]);

    return {
        images: images,
        isLoading: isLoading
    };
};
