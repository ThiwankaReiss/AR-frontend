import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageUploader = () => {
    const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fetchedImage, setFetchedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await axios.post('http://localhost:8080/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const fetchImage = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/images/${fileName}`, {
        responseType: 'blob',
      });
      const url = URL.createObjectURL(response.data);
      setFetchedImage(url);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  const deleteImage = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/images/${fileName}`);
      console.log(response.data);
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={uploadImage}>Upload Image</button>

      <h1>Fetch Image</h1>
      <input
        type="text"
        placeholder="Enter image name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />
      <button onClick={fetchImage}>Fetch Image</button>
      {fetchedImage && <img src={fetchedImage} alt="Fetched" />}

      <h1>Delete Image</h1>
      <button onClick={deleteImage}>Delete Image</button>
    </div>
  );
};

export default ImageUploader;
