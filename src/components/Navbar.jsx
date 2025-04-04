import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed" >
      <Toolbar>
        <Avatar src={`${process.env.PUBLIC_URL}/icons/icon_nasa.png`} alt="NASA Logo" style={{ marginRight: '10px' }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          NASA API by MARSITA
        </Typography>
        <Button color="inherit" component={Link} to="/">APOD</Button>
        <Button color="inherit" component={Link} to="/mars-photos">Mars Photos</Button>
        <Button color="inherit" component={Link} to="/asteroids">Asteroids</Button>
        <Button color="inherit" component={Link} to="/nasa-images">NASA Images</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;