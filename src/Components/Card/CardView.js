import React from 'react'
import { Link } from "react-router-dom";
import book from '../../image/harry.jpg'
import './CardView.css'
import { Button, Modal } from "react-bootstrap";
import { issueNewBook } from '../../Redux/Action';
import { connect } from 'react-redux';

const CardView = (props) => {
    const { name, Author, Price } = props.book;
    const [showModal, setShowModal] = React.useState(false);

    const [user, setUser] = React.useState("");

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const issueBook = (e) =>{
        e.preventDefault();
        console.log("user + book", book, user);
        props.issueNewBook(props.book, user);
        setShowModal(!showModal);
    }

    return (
        <div>
            <div className="card-item">
                <div className="card-inner">
                    <div className="card-top">
                        <img src={book} alt="" />
                    </div>
                    <div className="card-bottom">
                        <div >
                            <h4>{name}</h4>
                            <p>Author : {Author}</p>
                            <div className="card-info">
                                <p>Price :{Price}</p>
                            </div>
                        </div>
                        <div className="card-info">
                            <button className="mbtn" onClick={toggleModal}>Issue book</button>
                            <Link className="link" size="small" to="/showDetails">read more</Link>
                        </div>
                    </div>
                </div>

            </div>
            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                <Modal.Title>Select User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input  placeholder="user name" value={user} onChange={(e) => setUser(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={toggleModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={issueBook}>
                    Issue Book
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const mapStateToProps = state =>{
    return { 
        hasLoginError: state.hasLoginError,
     }
}

const mapDispatchToProps = dispatch =>{
    return {
        issueNewBook : (bookData, userData) => dispatch(issueNewBook(bookData, userData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardView);
