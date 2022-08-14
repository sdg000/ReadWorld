import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';
import SearchBooks from './SearchBook';
import Insights from './Insights';
import Home from './Home';
import Book from './Book';

export default function App() {
  const [results, setResults] = useState([])
  const [title, setTitle] = useState("")

  // export const displayBook = (id) => (results.id === id)
   

  return (
   
    <div className="App">
      <Nav setResults={setResults} setTitle={setTitle} title={title}/>
      <Routes>
        <Route exact path='/' element={<Home/>}>

        </Route>
        <Route path='/searchbooks'  element={<SearchBooks results={results} title={title}/>}>
          <Route path=':bookid' element={<Book results={results}/>}/>
        </Route>

        <Route path='/insights'  element={<Insights/>}/>

      </Routes>
    </div>
  );
}

// export function displayBook(id){
//   return res
// }



/**
 * save {results} to state and pass {setResults} to <Home/>
 * 
 */