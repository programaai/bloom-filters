import { Box, Container, CssBaseline, Grid, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';

import { BloomFilter } from './bloomfilter/types';
import BloomFilterInput from './bloomfilter/BloomFilterInput';
import BloomFilterSearch from './bloomfilter/BloomFilterSearch';
import BloomFilterView from './bloomfilter/BloomFilterView';
import Header from './Header';
import { theme } from './styles';

// m = -n*Math.log(p) / Math.pow(Math.LN2, 2)
// k = m/n * Math.LN2
//
// n = size of the set
// p = error rate
// m = the number of bits for the filter
// k = the number of hash functions

// function getBitArraySize(n: number, p: number): number {
//   return (-n * Math.log(p)) / Math.pow(Math.LN2, 2);
// }

// function getHashFunctionCount(m: number, n: number): number {
//   return (m / n) * Math.LN2;
// }

// const n = 10;
// const p = 0.2;
// const m = getBitArraySize(n, p);
// const k = getHashFunctionCount(m, n);

const initialState = (() => {
  const words = ['python', 'javascript', 'c#', 'swift', 'rust', 'kotlin'];

  return words.reduce((filter, word) => filter.add(word), new BloomFilter(10, 0.1));
})();

(window as any).theme = theme;

const App: React.FC = () => {
  const [bloomFilter, setFilter] = useState(initialState);
  const [searchValue, setSearchValue] = useState('');

  const addElement = (element: string) => {
    setFilter(bloomFilter.add(element));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box mt={3}>
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <BloomFilterInput onAdd={addElement} />
              <Box mt={3}>
                <BloomFilterSearch filter={bloomFilter} value={searchValue} onChange={setSearchValue} />
              </Box>
            </Grid>
            <Grid item xs={8}>
              <BloomFilterView filter={bloomFilter} search={searchValue} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
