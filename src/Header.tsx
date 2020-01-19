import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';

import { Menu as MenuIcon } from '@material-ui/icons';
import React from 'react';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Bloom Filter Visualizer</Typography>
      </Toolbar>
    </AppBar>
  );
}
