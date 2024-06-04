import React, { useEffect, useState } from 'react';
import Sofa from '../ThreeDModels/Sofa';
import CanvasModel from '../../canvas/CanvasModel';
import axios from 'axios';

const Sorter = ({ geos, model }) => {
    const [imgArray, setImgArray] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const responses = await Promise.allSettled(
                    geos.slice(0, geos.length).map(geo => axios.get(`http://localhost:8080/images/${geo.texture}`, {
                        responseType: 'blob',
                    }))
                );

                const urls = responses.map((result, index) => {
                    if (result.status === 'fulfilled') {
                        return {
                            image: URL.createObjectURL(result.value.data),
                            type: geos[index].name
                        };
                    } else {
                        console.error(`Error fetching image for ${geos[index].name}:`, result.reason);
                        return {
                            image: 'src/assets/noImage.png',
                            type: geos[index].name
                        };
                    }
                });

                setImgArray(urls);
            } catch (error) {
                console.error('Error in fetching images:', error);
            }
        };

        fetchImages();
    }, [geos]);

    console.log(imgArray);

    return (
        <>
            {imgArray.length === geos.length && (
                <CanvasModel imgArray={imgArray} geos={geos} model={model}  />
            )}
        </>
    );
};

export default Sorter;
