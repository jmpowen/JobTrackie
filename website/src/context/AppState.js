import React, { useReducer } from 'react';

import AppContext from './AppContext';
import AppReducer from './AppReducer';

const AppState = (props) => {
  let initialState = {
    
  };

  // No reason to use the dispatch yet,
  // Refer to this article as a resource: https://medium.com/javascript-in-plain-english/how-to-use-react-context-api-with-functional-component-472f1d5e0851

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;