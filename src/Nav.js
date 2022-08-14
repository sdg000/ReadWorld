import React from "react";
import "./Nav.css"
import {  Outlet, useNavigate } from "react-router-dom";

function Nav({setResults, setTitle, title}){
    const navigate = useNavigate()

    //onClick, fetch data from API
    function handleSearch(e){
        e.preventDefault()
        console.log("clicked")
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20&startIndex=21&key=AIzaSyDLk9f-e3hNh-IDO8OgvVpsS4Q8qGvF_9E`)
        .then(function(response){
            return response.json()
        })

        //save API fetch response to {results}
        .then(function(data){
            setResults(data)
            navigate("/searchbooks")
            
        })   
    }
    
    
    return (
        <div >   
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">ReadWorld</a>
                    </div>
                    <ul className="nav navbar-nav pull-right">
                        <li><a href="/insights">Insight</a></li>
                    </ul>
                    
                </div>
                <div className="container-fluid">
                    {/* <h1 style={{cursor: "default"}}>Search for your favorite book </h1> */}
                    <h1 className="col-lg-12" style={{textAlign: "center", cursor: "default"}}>Search for your favorite books!</h1>
                </div>
                <form className="form-inline">
                    <input className="form-control"  
                    type="text" size="100" 
                    placeholder="title of book or document" 
                    onChange={(e) => setTitle(e.target.value.toLowerCase())}
                    />
                    <button className="btn btn-primary" type="submit" onClick={handleSearch}>Search</button>

                </form>
                
                    
            </nav>
            
            <Outlet/>
            
        </div>
    )
}

export default Nav


// const title = "carrie"
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&download=epub&key=AIzaSyDLk9f-e3hNh-IDO8OgvVpsS4Q8qGvF_9E`)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         //console.log(data[0])
//         //const books = data
//         console.log(data.items[0])
//     })

//STYLE NAV
// style={{backgroundColor: "red"}}

// style={{borderBottom: "solid 1px", paddingBottom: "1rem"}}

//<h1  style={{color: "blue", cursor: "pointer", display: "inline"}} onClick={()=>navigate('/')}>ReadWorld</h1> ||
//<h1  style={{color: "red", cursor: "pointer", display: "inline"}} onClick={()=>navigate('/insights')}>Insight</h1>


/* <nav className="navbar navbar-default">
                <h1 style={{cursor: "default"}}>Search for your favorite book </h1>
                <label><img src="https://cdn-icons.flaticon.com/png/128/3330/premium/3330314.png?token=exp=1660416680~hmac=43594f12b73843ee4d6ecc51b981383e" width="30" height="30" alt="book image"/></label>
                <label>
                    <input 
                    type="text" 
                     name="position" 
                     placeholder="Job title, company, or skill"
                     onChange={(e) => setTitle(e.target.value.toLowerCase())}
                    /> 
                </label>

                <label>
                    <button onClick={handleSearch}>Search</button>
                </label>
                    
            </nav>
            
            <Outlet/> */