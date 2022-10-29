import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const SearchExercises = () => {
  useEffect(() => {});
  const [isSearch, setIsSearch] = useState('');

  const searchHandel = async () => {
    
  }

  return (
    <Stack alignItems={'center'} mt="37px" p="20px">
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
          mb: '50px',
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box sx={{ position: 'relative', MB: '72PX' }}>
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          value={isSearch}
          onChange={e => {
            setIsSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            height: '56px',
            position: 'absolute',
            right: '0px',
            fontSize: { lg: '20px', xs: '14px' },
          }}
          onClick={() => {}}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
