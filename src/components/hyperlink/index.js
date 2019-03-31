import React from 'react';

const BlankHyperlink = (props) => {
  const { children } = props;
  
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">{children}</a>
  );
};

export default BlankHyperlink;
