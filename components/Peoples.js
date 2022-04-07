import { Avatar, AvatarGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export default function Peoples({ pictures, current, max }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Typography>
        {current}/{max}
      </Typography>
      <AvatarGroup max={3}>
        <Avatar alt="Remy Sharp" src={pictures[0]} />
        <Avatar alt="Travis Howard" src={pictures[1]} />
        {new Array(max - 2).fill(null).map((_, i) => (
          <Avatar key={i} alt="Travis Howard" src="null" />
        ))}
      </AvatarGroup>
    </Box>
  );
}

// "https://mui.com/static/images/avatar/1.jpg" "https://mui.com/static/images/avatar/2.jpg"
