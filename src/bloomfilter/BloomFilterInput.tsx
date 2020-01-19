import { Box, Button, Card, CardContent, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, FormEvent, useState } from 'react';

import { FastForward } from '@material-ui/icons';

interface PropTypes {
  onAdd: (element: string) => void;
}

export default function BloomFilterInput({ onAdd }: PropTypes) {
  const [value, setValue] = useState('');
  const handleValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    onAdd(value);
    setValue('');
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Adicionar elemento à coleção
        </Typography>
        <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
          <Box display="flex" justifyContent="center">
            <Box flexGrow={1} marginRight="1em">
              <TextField
                label="Novo elemento"
                fullWidth
                name="elementField"
                value={value}
                onChange={handleValueChanged}
              />
            </Box>
            <Button color="primary" type="submit" variant="contained" endIcon={<FastForward />}>
              Adicionar
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}
