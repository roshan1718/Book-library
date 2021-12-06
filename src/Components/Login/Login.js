import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import { setLogin } from "../../Redux/Action";
import { connect } from "react-redux";

function Login(props) {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const {
        isLoading,
        isUserLoggedIn,
        loggedInUser,
        hasError,
        errorMsg,
        makeLogin
    } = props;

    // const validateForm = () => {
    //     return email.length > 0 && password.length > 0;
    // }

    const makeSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        makeLogin(data, navigate);
    };
    return (
        <form className="login">
            <h3 >Sign In</h3>
            {isUserLoggedIn && <b style={{color: "red"}}>{loggedInUser}</b>}
            <div>
                <label>Email address</label>
                {isLoading && <p>Loading....</p>}
                {hasError && <p>{errorMsg}</p>}
                <input autoFocus
                    type="email"
                    placeholder="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="password"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
                <div className="space">
                    <button type="submit"
                        className="btn btn-primary button"
                        // disabled={!validateForm()}
                        onClick={makeSubmit}
                    >Submit</button>
                    <p className="forgot-password text-right">
                        New User <Link to="/signup">SignUp</Link>
                    </p>
                </div>
            </div>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.login.isLoading,
        isUserLoggedIn: state.login.isUserLoggedIn,
        loggedInUser: state.login.loggedInUser,
        hasError: state.login.hasError,
        errorMsg: state.login.errorMsg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        makeLogin: (inputData, navigate) => dispatch(setLogin(inputData, navigate))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);