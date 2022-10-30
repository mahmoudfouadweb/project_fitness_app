import React from 'react';
import { Stack, Typography } from '@mui/material';

import icon from '../assets/icons/gym.png';

const BodyParts = ({ item, setBodyParts, bodyParts }) => {
  return (
    <Stack
      type={'button'}
      alignItems="center"
      justifyContent={'center'}
      className={'bodyPart-card'}
      sx={{
        borderTop: bodyParts === item ? '4px solid #FF2625' : '',
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '282px',
        cursor: 'pointer',
        gap: '47px',
      }}
    >
      <img
        src={icon}
        alt="dumbbell"
        style={{ width: '40px', height: '40px' }}
      />
    </Stack>
  );
};

export default BodyParts;
