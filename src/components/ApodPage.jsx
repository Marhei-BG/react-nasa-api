import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

const ApodPage = () => {
  const [apod, setApod] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_NASA_ENDPOINT}planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
        setApod(response.data);
      } catch (error) {
        setError('Error al cargar la imagen de APOD');
      }
    };

    fetchApod();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Typography variant="h1">Imagen del día</Typography>
      {apod.media_type === 'image' ? (
        <img src={apod.url} alt={apod.title} style={{ width: '100%', height: 'auto' }} />
      ) : (
        <iframe title="video" src={apod.url} frameBorder="0" allowFullScreen></iframe>
      )}
      <h2>{apod.title}</h2>
      <p>{apod.explanation}</p>
    </div>
  );
};

export default ApodPage;