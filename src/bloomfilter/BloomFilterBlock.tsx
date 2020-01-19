import { theme, useStyles } from '../styles';

import { Box } from '@material-ui/core';
import React from 'react';
import { bit } from './types';
import classNames from 'classnames';

interface PropTypes {
  filter: bit[];
  variant?: 'primary' | 'secondary';
}

export default function BloomFilterBlock({ filter, variant = 'primary' }: PropTypes) {
  const classes = useStyles();
  return (
    <Box display="flex" flexWrap="wrap">
      {filter.map((bit, idx) => (
        <div
          key={`${idx}:${bit}`}
          className={classNames(classes.bloomFilterBox, variant, { [classes.bloomFilterBoxOn]: !!bit })}
        >
          &nbsp;
        </div>
      ))}
    </Box>
  );
}
