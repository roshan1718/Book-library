
const initialState = {};
  
export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN_START':
      return {
        ...state,
        isLoading: true,
        isUserLoggedIn: false,
        loggedInUser: null,
        hasError: false,
        errorMsg: null
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isUserLoggedIn: true,
        loggedInUser: action.payload.loggedInUser,
        hasError: false,
        errorMsg: null
      };
    case 'USER_LOGIN_FAIL':
      return {
        ...state,
        isLoading: false,
        isUserLoggedIn: false,
        loggedInUser: null,
        hasError: true,
        errorMsg: action.payload.errorMsg
      };
      case 'LOGOUT': {
        return {
            ...state,
            loggedInUser: null,
            isUserLoggedIn: false,
        }
       
      }
      case "ISSUE_BOOK": {
        return {
          ...state,
          issueBookSuccess: true
        }
   }
    default:
      return { state };
  }
};



  // export default function rootReducer(state = initialState, action) {
  //   switch (action.type) {
  //     case 'SET_LOGIN_START': {
  //       return {
  //         ...state,
  //         isLoading: true,
  //         isUserLoggedIn: false,
  //         loggedInUser: null,
  //         hasError: false,
  //         errorMsg: null
  //       }
  //     }
  //     case 'SET_LOGIN_SUCCESS': {
  //       return {
  //           ...state,
  //           loginStarted: false,
  //           hasLoginError: false,
  //           userName: action.payload.userName,
  //           isUserLoggedIn : true,
  //           loginErrorMsg: null
  //       }
  //     }
  //     case 'SET_LOGIN_FAIL': {
  //       return {
  //           ...state,
  //           loginStarted: false,
  //           hasLoginError: true,
  //           loginErrorMsg: action.payload.loginErrorMsg
  //       }
  //     }
  //     case 'LOGOUT': {
  //       return {
  //           ...state,
  //           userName: null,
  //           isUserLoggedIn : false,
  //       }
  //     }
  //     case 'SET_SIGNUP': {
  //       return {
  //           ...state,
  //           signUpMsg: action.payload.msg
  //       }
  //     }
  //     case 'ALREADY_SIGNUP': {
  //       return {
  //         ...state,
  //         signUpMsg: action.payload.msg
  //       }
  //     }
  //     case "ISSUE_BOOK": {
  //       return {
  //         ...state,
  //         issueBookSuccess: true
  //       }
  //     }
  //     default:
  //       return state
  //   }
  // }
