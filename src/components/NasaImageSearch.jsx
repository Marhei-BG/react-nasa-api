import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardMedia, CardContent, Typography, Grid, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const NasaImageSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}`);
      setResults(response.data.collection.items);
      setError(null);
    } catch (error) {
      setError('Error al realizar la búsqueda');
    }
  };

  return (
    <div>
      <Typography variant="h1">Buscar imágenes de la NASA</Typography>
      <TextField
        variant="filled"
        label="Buscar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Buscar
      </Button>
      {error && <div>{error}</div>}
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {results.length === 0 && !error && (
          <Typography variant="h6" style={{ margin: '20px auto' }}>
            No se encontraron imágenes con esas características.
          </Typography>
        )}
        {results.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.data?.[0]?.nasa_id}>
            <Card>
              <CardMedia
                component="img"
                alt={item.data?.[0]?.title || 'Sin título'}
                height="200"
                image={item.links?.[0]?.href || ''}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.data?.[0]?.title || 'Sin título'}
                </Typography>
                <Accordion>
                  <AccordionSummary expandIcon={<span>▼</span>}>
                    <Typography>Detalles</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.data?.[0]?.description || 'Sin descripción'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Fecha: {item.data?.[0]?.date_created || 'Fecha no disponible'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Centro: {item.data?.[0]?.center || 'Centro no disponible'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Tipo de medio: {item.data?.[0]?.media_type || 'Tipo no disponible'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Palabras clave: {item.data?.[0]?.keywords ? item.data[0].keywords.join(', ') : 'No keywords available'}
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      href={item.links?.[0]?.href || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginTop: '10px' }}
                    >
                      Visitar sitio
                    </Button>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NasaImageSearch;