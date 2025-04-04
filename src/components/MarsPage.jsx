import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const MarsPhotosPage = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarsPhotos = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_NASA_ENDPOINT}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_NASA_API_KEY}`);
        setPhotos(response.data.photos);
      } catch (error) {
        setError('Error al cargar las fotos de Marte');
      }
    };

    fetchMarsPhotos();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Typography variant="h1">Fotos de Marte</Typography>
      <Grid container spacing={3}>
        {photos.map(photo => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
            <Card>
              <CardMedia
                component="img"
                alt={`Mars photo ${photo.id}`}
                height="200"
                image={photo.img_src}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {`Mars photo ${photo.id}`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MarsPhotosPage;