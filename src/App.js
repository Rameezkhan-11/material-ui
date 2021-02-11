import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
 <>
  <h1>Hello World</h1>
  <div className={classes.root}>
     
      <Paper elevation={3} />
    </div>
    <h1>Team V8</h1>


 </>
  );
}

export default App;
