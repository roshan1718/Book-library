import React from 'react'
import { Link } from "react-router-dom";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import "./Header.css"
import { connect } from 'react-redux';
import { setLogOut } from '../../Redux/Action';

const Header = ({ makeLogout, isUserLogedIn }) => {
    return (
        <div className="header">
            <div className="nav">
                <div className="logo"><AutoStoriesIcon /></div>
                <Link className="nav-link active color" aria-current="page" to="/">Book Library</Link>
                <Link className="nav-link color" to="/aboutus">About us</Link>
                <Link className="nav-link color" to="/issue">Issue Books</Link>

                <Link className="nav-link color" to="/login">Login</Link>
                <Link className="nav-link color" to="/signup">SignUp</Link>
                <button className="spac" onClick={makeLogout}>
                <Link className="btn" to="/login">Logout</Link></button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isUserLogedIn: state.isUserLogedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        makeLogout: () => dispatch(setLogOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
