import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

export default function MyProvider({ children }) {
  const contextValue = useMemo(() => ({}), []);

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
