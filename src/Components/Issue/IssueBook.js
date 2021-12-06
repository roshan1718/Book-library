import React from 'react'
import "./IssueBook.css"
import issueBook from "../../data/issueBook";

const tableStyle = {
   border: '1px solid black',
   borderCollapse: 'collapse',
   textAlign: 'center',
   width: '100%',
}

const tdStyle = {
     border: '1px solid #85C1E9',
   background: 'white',
   padding: '5px'
   
};

const thStyle = {
     border: '1px solid #3498DB',
   background: '#D22B2B',
     color: 'white',
   padding: '5px'
};

const Table =() => {
  return (
    <div className="table">
    <table style={tableStyle}>
      <tbody>
        <tr>
          <th style={thStyle}>ISBN</th>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Author</th>
          <th style={thStyle}>Student Name</th>
          <th style={thStyle}>ReturnBook</th>
        </tr>
        {issueBook.map(({ ISBN, name, Author, userInfo }) => (
          <tr key={ISBN}>
            <td style={tdStyle}>{ISBN}</td>
            <td style={tdStyle}>{name}</td>
            <td style={tdStyle}>{Author}</td>
            <td style={tdStyle}>{userInfo}</td>
            <td style={tdStyle}><button>Return</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

const IssueBook = () => {
  const [searchField, setSearchField] = React.useState("");

  const filteredPersons = issueBook.filter(
    person => {
        return (
          person
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
          person
            .Author
            .toLowerCase()
            .includes(searchField.toLowerCase())
        ); 
    }
  );
 
  const handleSearchChange = e => {
    setSearchField(e.target.value);
  };


   return (
     <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search book"
          onKeyUp={handleSearchChange}
        />
        <button className="sbtn"type="submit" onClick={handleSearchChange}>
          Search
        </button>
      </div>
      {issueBook === [] ? null : 
          filteredPersons.map((book) => (<Table book={book} />))
        }
     </>
   );
};

export default IssueBook
