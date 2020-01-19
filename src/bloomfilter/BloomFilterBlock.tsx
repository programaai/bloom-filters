import { Box } from '@material-ui/core';
import React from 'react';
import { bit } from './types';
import classNames from 'classnames';
import { useStyles } from '../styles';

interface PropTypes {
  filter: bit[];
}

export default function BloomFilterBlock({ filter }: PropTypes) {
  const classes = useStyles();
  return (
    <Box display="flex" flexWrap="wrap">
      {filter.map((bit, idx) => (
        <div
          key={`${idx}:${bit}`}
          className={classNames(classes.bloomFilterBox, { [classes.bloomFilterBoxOn]: !!bit })}
        >
          &nbsp;
        </div>
      ))}
    </Box>
  );
}
