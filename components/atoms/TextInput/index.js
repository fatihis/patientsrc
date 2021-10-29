import React from 'react';

import {styles} from './styles';

export const Input = ({externalStyles, onChange, placeholder}) => {
  return (
    <TextInput
      style={externalStyles}
      onChangeText={text => onChange(text)}
      placeholder={placeholder}
    />
  );
};
