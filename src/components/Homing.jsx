import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Homing.css'
import NavBar from './NavBar'
import Aboutus from './Aboutus'

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }});
        setBooks(response.data.books);
      } catch (error) {
        console.error("Error Encountered : ", error.message);
      }
    };
    getBooks()
    console.log(books)
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const filteredBooks = books.filter((books) =>
    books.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );


  return (
    <>
    <NavBar />
    <div className='container'>
        <div className="searchbar">
        <input
          type="text"
          placeholder="Search books"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
      <ul>
        {filteredBooks.map((book) => (

          <div className="box-container">
            <div className="box">
              <p className='head'>{book.title}</p>
              <p className='head sub'>{book.subtitle}</p>
              <div className='imgs'>
                <img src={book.imageLinks.thumbnail} alt="bookings" />  
              </div>
              <p className='author'>{book.authors}</p>
            </div>
            <div className='highdiv'>
              <p className='pages'>{book.pageCount} pages</p>
              <p className='published'>Published on : {book.publishedDate}</p>
              {/* <p className='publisher'>{book.publisher}</p> */}
              {/* <p className='category'>{book.categories}</p> */}
            </div>
            <div className='lowdiv'>
              <p className='rating'>{book.averageRating}⭐ Rating</p>
              <button className='addcart'>Add To Cart</button>
            </div>
          </div>
          
        ))}
      </ul>
    </div>
    </>
  )
}

export default App;