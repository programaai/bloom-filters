import { Box, Button, Card, CardContent, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, FormEvent, useState } from 'react';

import { BloomFilter } from './types';
import { Search } from '@material-ui/icons';

interface PropTypes {
  filter: BloomFilter;
}

export default function BloomFilterSearch({ filter }: PropTypes) {
  const [result, setResult] = useState<null | boolean>(null);
  const [value, setValue] = useState('');
  const [lastSearchValue, setLastSearchValue] = useState('');

  const handleValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (value !== event.target.value) {
      setValue(event.target.value);
    }
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const newResult = filter.has(value);
    setResult(newResult);
    setLastSearchValue(value);
  };

  const label = (() => {
    switch (result) {
      case null:
        return '';
      case true:
        return (
          <span>
            <strong>talvez</strong> esteja no conjunto
          </span>
        );
      case false:
        return (
          <span>
            <strong>não está</strong> no conjunto
          </span>
        );
    }
  })();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Pesquisar
        </Typography>
        <form noValidate onSubmit={handleFormSubmit}>
          <Box display="flex" justifyContent="center">
            <Box flexGrow={1} marginRight="1em">
              <TextField label="Pesquisar" fullWidth name="elementField" value={value} onChange={handleValueChanged} />
            </Box>
            <Button color="primary" type="submit" variant="contained" endIcon={<Search />}>
              Pesquisar
            </Button>
          </Box>
        </form>
        {label !== '' && (
          <Box mt={2}>
            <Typography variant="h6" component="p">
              Resultado da busca:
            </Typography>
            <em>{lastSearchValue}</em> {label}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
