import {
  Box,
  Card,
  CardActions,
  CardContent,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';

import { BloomFilter } from './types';
import BloomFilterBlock from './BloomFilterBlock';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import React from 'react';

interface PropTypes {
  filter: BloomFilter;
  search: string;
}

export default function BloomFilterView(props: PropTypes) {
  const { filter, search } = props;

  let searchFilter = null;
  if (search !== '') {
    searchFilter = new BloomFilter(filter.capacity, filter.errorRate, new Set([search]));
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Bloom filter
        </Typography>
        <Box mb={searchFilter === null ? 3 : 0}>
          <BloomFilterBlock filter={filter.filter} />
        </Box>
        {searchFilter !== null && (
          <Box mb={3}>
            <BloomFilterBlock filter={searchFilter.filter} variant="secondary" />
            <Typography variant="caption" component="span" gutterBottom>
              Hashes do valor pesquisado
            </Typography>
          </Box>
        )}
        <ExpansionPanel disabled={filter.items.length === 0}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" component="h4">
              Elementos da coleção:{' '}
              <Typography variant="body2" component="span">
                ({filter.items.length})
              </Typography>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List dense>
              {filter.items.map(item => (
                <ListItem key={item}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </CardContent>
      <CardActions>
        Capacidade: <strong>{filter.capacity}</strong>, Chance de falso positivo:{' '}
        <strong>{(filter.errorRate * 100).toFixed(1)}%</strong>
      </CardActions>
    </Card>
  );
}
