import React, { useEffect, useState } from 'react';
import Sofa from '../ThreeDModels/Sofa';
import CanvasModel from '../../canvas/CanvasModel';
import axios from 'axios';

const SofaSorter = ({ geos }) => {
    const [imgArray, setImgArray] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const responses = await Promise.all(
                    geos.slice(0, 3).map(geo => axios.get(`http://localhost:8080/images/${geo.texture}`, {
                        responseType: 'blob',
                    }))
                );
                const urls = responses.map(response => URL.createObjectURL(response.data));
                setImgArray(urls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [geos]);

    return (
        <>
            {imgArray.length === 3 && (
                <CanvasModel imgArray={imgArray} geos={geos} model={"sofa"} edit="edit" />
            )}
        </>
    );
};

export default SofaSorter;
