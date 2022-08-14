import React, {useState} from "react";
import {useParams, Link} from "react-router-dom"

function Book({results}){
    // const [book, setbooks] = useState([])
   const {items} = results
    let params = useParams()
    
    let book = items.find((item) => item.id === params.bookid)
    console.log(book)


    return (
        <div>
            <h1>{book.volumeInfo.title}</h1>
            <p>{book.volumeInfo.description}</p>
            <p>Author(s): {book.volumeInfo.authors}</p>
            <p>Date Published: {book.volumeInfo.publishedDate}</p>
            <a href={book.accessInfo.webReaderLink}> Download from Google Play Store</a>
        </div>
    )
}

export default Book
