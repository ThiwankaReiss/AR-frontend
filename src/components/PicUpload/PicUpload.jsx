import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './PicUpload.css'
const PicUpload = ({ text, getImage, currentImage, setShowImage, showImage }) => {
    const [image, setImage] = useState(null);
    const [showImagePicker, setShowImagePicker] = useState(false);

    if (currentImage != null) {
        setShowImagePicker(true);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setShowImagePicker(true);
    };

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append('image', image);
        setShowImage(false);
        axios.post('http://localhost:8080/upload', formData)
            .then(function (response) {
                console.log(response);
                const myArray = response.data.url.split("id=");
                console.log(myArray[1]);
                getImage(myArray[1]);
                
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                setShowImage(true); // Set uploading status to false after upload completion or failure
            });
    }

    const imageContainerRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (imageContainerRef.current && !imageContainerRef.current.contains(event.target)) {
                setShowImagePicker(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [imageContainerRef]);

    return (


        // </div>
        <div className="container-fluid m-1 p-0 g-0" ref={imageContainerRef}>
            <div className="row m-0 p-0 g-0">
                <div className="col-8 text-primary d-flex align-items-center">
                    {text}
                </div>

                <div className="col-4 d-flex justify-content-end">
                    <div class="input-div">
                        <input class="input" name="file" type="file" accept="image/*" onChange={handleImageChange} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                    </div>
                </div>
                {showImagePicker && (
                    <div>
                        <div className='card'>


                            {showImage ? (
                                <>
                                    {image && (
                                        <img height="200px" className='m-1' src={URL.createObjectURL(image)} alt="Selected Image" />
                                    )}
                                </>
                            ) : (
                                <div class="spinner-grow" role="status">
                                    <span class="sr-only"></span>
                                </div>
                            )}

                        </div>
                        <div className='w-100 mt-1 d-flex justify-content-end'>
                            <button className='btn btn-outline-primary btn-sm' onClick={uploadImage}>Add to dress</button>
                        </div>


                    </div>
                )}
            </div>
        </div>
    );
};

export default PicUpload;
