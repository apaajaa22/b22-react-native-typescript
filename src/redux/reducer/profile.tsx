const initialState = {
  dataProfile: {},
};

const profile = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_PROFILE':
      return {
        ...state,
        dataProfile: action.payload,
      };
    default:
      return state;
  }
};

export default profile;
