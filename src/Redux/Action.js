import { data } from "../data/data";
import issueBook from "../data/issueBook";
import Details from "../data/details";


export const userLoginStart = () => {
  return {
    type: 'USER_LOGIN_START'
  };
};

export const userLoginSuccess = (userName) => {
  return {
    type: 'USER_LOGIN_SUCCESS',
    payload: { loggedInUser: userName }
  };
};

export const userLoginFail = (errorMsg) => {
  return {
    type: 'USER_LOGIN_FAIL',
    payload: { errorMsg: errorMsg }
  };
};

export const setLogin = (inputData, navigate) => {
  return (dispatch) => {
    dispatch(userLoginStart());
    let userExist = data.find((user) => {
      return user.email === inputData.email;
    });

    if (userExist !== undefined) {
      if (userExist.password === inputData.password) {
        dispatch(userLoginSuccess(userExist.email));
        navigate("/");
      } else {
        dispatch(userLoginFail("Password Missmatch"));
      }
    } else {
      dispatch(userLoginFail("User Not Found"));
    }
    console.log("5");
  };
};

export const setLogOut = () => {

  return {
    type: "LOGOUT"
  }
};

export const userRegisterStart = () => {
  return {
    type: 'USER_REGISTER_START'
  };
};

export const userRegisterSuccess = () => {
  return {
    type: 'USER_REGISTER_SUCCESS'
  };
};

export const userRegisterFail = (errorMsg) => {
  return {
    type: 'USER_REGISTER_FAIL',
    payload: { errorMsg: errorMsg }
  };
};

export const signUp = (inputData) => {
  console.log(data);
  console.log(inputData);

  return (dispatch) => {
    dispatch(userRegisterStart());
    let userExist = data.filter((user) => {
      return user.email === inputData.email;
    });
    if (userExist.length === 0) {
      data.push(inputData);
      dispatch(userRegisterSuccess());
    } else {
      dispatch(userRegisterFail("User Already Exist"));
    }
  };
};


export const issueNewBook = (bookInfo, userInfo) => {
  console.log("n here in action");
  let newObj = { ...bookInfo, userInfo }
  issueBook.push(newObj);
  return {
    type: 'ISSUE_BOOK'
  }
}

export const bookDetails = (bookInfo) => {
  console.log("details here in action");
  let newObj = { ...bookInfo}
  Details.push(newObj);
  return {
    type: 'BOOK_DETAILS'
  }
}
// export const signUp = (creds) => {
//     // type: "SET_SIGNUP",
//     // payload: true
//     let userExist = Users.filter((user) => { return user.email === creds.email });
//     if (userExist.length > 0) {
//         return {
//             type: "ALREADY_SIGNUP",
//             payload: { data: [], msg: "User Already Exists" }
//         }
//     } else {
//         Users.push(creds);
//         console.log("register users", Users);

//         return {
//             type: "SET_SIGNUP",
//             payload: { msg: "User Register Success" }
//         }
//     }
// };

// export const setLogin = (cred) => {
//     console.log("users", Users)
//     console.log("cred", cred)
//     let userExist = Users.filter((user) => { return user.email === cred.email });
//     if (userExist.length > 0) {
//         let currentUser = userExist[0];
//         if (currentUser.password === cred.password) {
//             history.push("/")
//             return {
//                 type: "SET_LOGIN_SUCCESS",
//                 payload: { userName: currentUser.email }
//             }
//         } else {
//             return {
//                 type: "SET_LOGIN_FAIL",
//                 payload: { loginErrorMsg: "Invalid Credentials" }
//             }
//         }
//     } else {
//         return {
//             type: "SET_LOGIN_FAIL",
//             payload: { loginErrorMsg: "Login Failed: Record Not Found" }
//         }
//     }
// };
