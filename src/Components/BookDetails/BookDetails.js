import React from 'react'
import { Link } from "react-router-dom";
import './BookDetails.css'
import book from '../../image/harry.jpg'
import Details from '../../data/details';


const BookDetails = () => {
    const { ISBN, name, Author, details } = Details
    return (
        <div className="wrapper">
            <div className="section-left">
                <h1 className="title">Title:- { name}</h1>
                <h5 className="isbn">ISBN :-{ISBN}</h5>
                <div className="info">
                    <h5>Author By:-{Author}</h5>
                    <h5>Ditails:-</h5><p>{details}</p>
                </div>
               <button className="home"> <Link className="link"to="/">Back to Home</Link></button>
            </div>
            <div className="section-right">
                <img src={book} alt="" />
            </div>        
        </div>
    );
}

export default BookDetails
