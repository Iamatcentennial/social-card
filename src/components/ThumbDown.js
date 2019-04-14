import React from 'react';
import Button from '@material-ui/core/Button';
import ThumbDown from '@material-ui/icons/ThumbDown';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
   text:{
    margin:'auto'   
   }
});
const ThmbDownIcon = (props) =>{
    const {classes, dislike, onDisLike} = props;
    
  return (
    <Button aria-label="Add to favorites" onClick={onDisLike}>
        <ThumbDown />
        <div className={classes.text}>{dislike}</div>
    </Button>
  )
}

export default withStyles(styles)(ThmbDownIcon);