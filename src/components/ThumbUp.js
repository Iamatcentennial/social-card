import React from 'react';
import Button from '@material-ui/core/Button';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    text:{
     margin:'auto'   
    }
 });

export const ThmbUpIcon =(props) =>{
    const {classes, like, onLike} = props;

  return (
    <Button aria-label="Add to favorites" onClick={onLike}>
        <ThumbUp />
        <div className={classes.text}>{like}</div>
    </Button>
  )
}

export default withStyles(styles)(ThmbUpIcon);
