const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT": {
      return {
        darkMode: false,
      };
    }
    case "DARK": {
      return {
        darkMode: true,
      };
    }
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode,
      };
    }
    case "OPEN_SIDE": {
      return {
        sidebar: true,
      };
    }
    case "CLOSE_SIDE": {
      return {
        sidebar: false,
      };
    }
    case "SIDEBAR": {
      return {
        sidebar: !state.sidebar,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
