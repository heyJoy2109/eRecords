import React, { useReducer } from "react";

const AppContext = React.createContext();

const initialState = {
  recordEditable: false,
  users: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [action.payload.user, ...state.users],
      };
    case "MODIFY_USER":
      return {};
    case "REMOVE_USER":
      return {};
  }
};

const addUser = (dispatch) => {
  return ({ user }) => {
    dispatch({
      type: "ADD_USER",
      payload: {
        user,
      },
    });
  };
};

const AppProducer = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const actions = {
    addUser: addUser(dispatch),
  };

  return (
    <AppContext.Provider value={{ state, ...actions }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProducer };
