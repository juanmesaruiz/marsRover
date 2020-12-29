import React from 'react';

export const mockComponent = (name, props) => {
  const { children, ...restOfProps } = props;
  return (
    <code name={name} aria-label={name} props={restOfProps}>
      {children}
    </code>
  );
};
