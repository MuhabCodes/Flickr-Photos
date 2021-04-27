import React from 'react';
import background from './background.jpg';

export default function SignUp() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      width: '100%',
      minHeight: '850px',
      backgroundRepeat: 'no-repeat',

    }}
    />
  );
}
