import React, { Component } from 'react';
import BookListItem from '../book-list-item';

import { withBookstoreService } from '../hoc';
import './book-list.css';


const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    }
  ]

  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}><BookListItem book={book}/></li>
          )
        })
      }
    </ul>
  );
}


export default withBookstoreService(BookList)
