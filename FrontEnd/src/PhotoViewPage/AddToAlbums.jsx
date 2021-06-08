import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

/**
   * button Add to album
   * @function MenuListComposition
   */
export default function MenuListComposition() {
  const history = useHistory(); // useHitory to redirect the user
  const userJwt = jwt(localStorage.getItem('token'));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [albums, setAlbums] = useState(null);
  const { routeId } = useParams(); // grab the id of the photo to post
  useEffect(() => {
    if (userJwt !== '') {
      axios.get('/userAlbums') // fetch albums // use : `/users/${userJwt.sub}/albums` to merge with backend
        .then((resp) => {
          setAlbums(resp.data);
          return resp.data;
        }).catch(() => { history.push('*'); });
    }
  }, []);
  /**
   * post photo to album
   * @function postPhoto
   * @returns {void}
   */
  const postPhoto = (i) => {
    const albumData = {};
    albumData.albumId = albums[i].albumId;
    albumData.photoId = routeId;
    // use `/albums/${albumData.albumId}/photos`
    axios.post('albumsPhotos', albumData).then(() => {
      setAlbums((currentItems) => currentItems.filter((item, index) => index !== i));
    }).catch((error) => {
      if (error.response.status === 404) {
        setTimeout(() => history.push('*'), 100); // Redirect to Error page
      }
    });
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{
            color: '#ffffff', fontSize: '43px', position: 'absolute', right: '32px', bottom: '-25px',
          }}
        >
          +
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem disabled>Add to Albums</MenuItem>
                    {albums && albums.map((album, index) => (
                      <MenuItem
                        key={album.albumId}
                        onClick={() => postPhoto(index)}
                      >
                        {album.albumTitle}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
