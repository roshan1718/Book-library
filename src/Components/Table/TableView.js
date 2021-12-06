 import React from 'react'
 import "./TableView.css"
 
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

 
 const TableView = ({books}) => {
 console.log(books);
    return (
      <div className="table">
        <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={thStyle}>ISBN</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Author</th>
              <th style={thStyle}>Price</th>
            </tr>
            {books.map(({ ISBN, name, Author, Price }) => (
              <tr key={ISBN}>
                <td style={tdStyle}>{ISBN}</td>
                <td style={tdStyle}>{name}</td>
                <td style={tdStyle}>{Author}</td>
                <td style={tdStyle}>{Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

 
 export default TableView
 