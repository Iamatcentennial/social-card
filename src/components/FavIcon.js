import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function FavIcon() {
  return (
    <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                </IconButton>
  )
}
