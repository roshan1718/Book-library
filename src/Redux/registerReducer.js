const initialState = {};
  
  const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_REGISTER_START':
        return {
          ...state,
          isLoading: true,
          hasError: false,
          errorMsg: null
        };
  
      case 'USER_REGISTER_SUCCESS':
        return {
          ...state,
          isLoading: false,
          hasError: false
        };
  
      case 'USER_REGISTER_FAIL':
        return {
          ...state,
          isLoading: false,
          hasError: true,
          errorMsg: action.payload.errorMsg
        };
  
      default:
        return { state };
    }
  };
  export default registerReducer;
  