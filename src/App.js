import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Player from './Player';
import Queue from './Queue';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function App() {
  const classes = useStyles();
  return (
	  <Container maxWidth="xs">
      <Typography component="div" className={classes.root}  />
      <Player />
      <br />
  	  <Queue />
      <br />
      <Copyright />
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'# Copyright © '}
      {new Date().getFullYear()}
      {' #'}
    </Typography>
  );
}

export default App;
