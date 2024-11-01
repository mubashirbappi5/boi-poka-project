import React, { useEffect, useState } from 'react';
import Book from './Book';



const Books = () => {
    const [books, setbooks] = useState([])
    useEffect(()=>{
        fetch("/public/booksData.json")
        .then(res => res.json())
        .then(data=> setbooks(data))
    },[])
    return (
        <>
        <div className='w-11/12 mx-auto mt-12'>
            <h1 className='text-3xl font-bold font-stylefont text-center my-6'>Books</h1>
           <div className='grid grid-cols-3 gap-6'>
           {
                books.map(book => <Book key={book.bookId} book={book}/>)
            }
           </div>
            
        </div>
        </>
    );
};

export default Books;