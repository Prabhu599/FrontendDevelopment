import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const  MaterialUi = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Accordion sm={12}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <Grid >
            <TextField className={classes.root} label='GRID'  color='black' required></TextField>
        </Grid>
        
      </Accordion>
      
    </Grid>
  );
}

