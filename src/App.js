import React  from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import BookDetails from './Components/BookDetails/BookDetails';
import CardView from './Components/Card/CardView';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import PrivateRoute from "./Components/PrivateRoute";
import IssueBook from './Components/Issue/IssueBook';
import history from './history';

function App() {
  
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <div className="container">
        <Routes>
          <>
          <Route path="/login"  exact element={<Login/>}  />
          <Route path="/signup"  exact element={<SignUp/>}  />
          <Route path="/aboutus"  exact element={<AboutUs/>}  />
          <Route path="/"  exact element={<Home/>}  />
          <Route path="/" element={<PrivateRoute />} >
            <Route path="/issue"  exact element={<IssueBook/>}  />
            <Route path="/card"  exact element={<CardView/>}  />
          </Route>
        
          <Route path="/showDetails"  exact element={<BookDetails/>}  />
          </>
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}


export default App;