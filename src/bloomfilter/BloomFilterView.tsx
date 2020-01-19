import {
  Box,
  Card,
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
}

export default function BloomFilterView(props: PropTypes) {
  const { filter } = props;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Bloom filter
        </Typography>
        <Box mb={3}>
          <BloomFilterBlock filter={filter.filter} />
        </Box>
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
    </Card>
  );
}
