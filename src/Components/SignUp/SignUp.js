import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../../Redux/Action";
import "./SignUp.css"

const SignUp = (props) => {
    const { isLoading, hasError, errorMsg, makeUserRegister } = props;
    const [data, setData] = React.useState({
      name: "",
      email: "",
      password: ""
    });

    const makeSubmit = (e) => {
        e.preventDefault();
        makeUserRegister(data);
      };

    return (
        <form className="signup" >
            {isLoading && <p style={{color: "red"}}>Loading data</p>}
            {hasError && <p style={{color: "red"}}>{errorMsg}</p>}
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>name</label>
                <input
                 type="text"
                placeholder="name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                /> 
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input
          type="email"
          placeholder="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />            </div>

            <div className="form-group">
                <label>Password</label>
                <input
          type="password"
          placeholder="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />            </div>

            <button type="submit" className="btn btn-primary button"
            onClick={makeSubmit}> SUBMIT</button>
            <p className="forgot-password text-right">
                Already registered <Link to="/login">sign in?</Link>
            </p>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.register.isLoading,
        hasError: state.register.hasError,
        errorMsg: state.register.errorMsg
      };
}

const mapDispatchToProps = dispatch => {
    return {
        makeUserRegister: (inputData) => dispatch(signUp(inputData))
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);