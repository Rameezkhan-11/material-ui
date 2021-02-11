import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
    <FormGroup>
  <FormControlLabel
    control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
    label="Small"
  />
  <FormControlLabel
    control={<Switch checked={checked} onChange={toggleChecked} />}
    label="Normal"
  />
</FormGroup>


 </>
  );
}

export default App;
