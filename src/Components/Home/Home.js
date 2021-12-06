import React from 'react'
import "./Home.css"
import CardView from '../Card/CardView';
import books from '../../data/books'


const Home = () => {
  // let books = [
  //   { ISBN: 1, name: 'TomRider', Author: "JK", Price: '$250' },
  //   { ISBN: 2, name: 'Alonemask', Author: 'PC', Price: '$250' },
  //   { ISBN: 3, name: 'MarkWatt', Author: 'Dk', Price: '$250' },
  //   { ISBN: 4, name: 'JohnSmith', Author: 'ADI', Price: '$250' }
  // ];

  const [searchField, setSearchField] = React.useState("");

  const filteredPersons = books.filter(
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
    <div className="container">
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
      <div className='card'>

        {books === [] ? null : 
          filteredPersons.map((book) => (<CardView book={book} />))
        }
      </div>
    </div>
  )
}

export default Home
