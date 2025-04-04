import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const AsteroidsPage = () => {
  const [asteroids, setAsteroids] = useState([]);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchAsteroids = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_NASA_ENDPOINT}neo/rest/v1/neo/browse?api_key=${process.env.REACT_APP_NASA_API_KEY}`
        );
        setAsteroids(response.data.near_earth_objects);
      } catch (error) {
        setError('Error al cargar los asteroides');
      }
    };

    fetchAsteroids();
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Typography variant="h1">Asteroides</Typography>
      <Typography variant="h2">Asteroides cercanos a la Tierra</Typography>
      {asteroids.length === 0 ? (
        <Typography>No hay asteroides cercanos en este momento.</Typography>
      ) : (
        asteroids.map((asteroid) => (
          <Accordion 
          
            expanded={expanded === asteroid.id}
            onChange={handleChange(asteroid.id)}
            key={asteroid.id}
      
          >
            <AccordionSummary>
              <Typography variant="h2">{asteroid.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>Id: {asteroid.id}</p>
              <p>Nombre: {asteroid.name}</p>
              <p>
                Distancia:{' '}
                {asteroid.close_approach_data?.length > 0
                  ? asteroid.close_approach_data[0]?.miss_distance?.kilometers
                  : 'N/A'}{' '}
                km
              </p>
              <p>Magnitud: {asteroid.absolute_magnitude_h}</p>
              <p>
                Fecha de aproximación:{' '}
                {asteroid.close_approach_data?.[0]?.close_approach_date_full}
              </p>
              <p>
                Velocidad:{' '}
                {asteroid.close_approach_data?.[0]?.relative_velocity?.kilometers_per_hour}{' '}
                km/h
              </p>
              <p>
                Diámetro:{' '}
                {asteroid.estimated_diameter?.kilometers?.estimated_diameter_max} km
              </p>
              <p>
                Potencialmente peligroso:{' '}
                {asteroid.is_potentially_hazardous_asteroid ? 'Sí' : 'No'}
              </p>
              <p>Órbita: {asteroid.orbital_data?.orbit_class?.orbit_class_description}</p>
              <p>
                URL:{' '}
                <a href={asteroid.nasa_jpl_url} target="_blank" rel="noreferrer">
                  {asteroid.nasa_jpl_url}
                </a>
              </p>
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </div>
  );
};

export default AsteroidsPage;
