import React, {useState} from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function Nav({setResults, setTitle, title}){
    const navigate = useNavigate()

    //onClick, fetch data from API
    function handleSearch(){
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20&startIndex=21&key=AIzaSyDLk9f-e3hNh-IDO8OgvVpsS4Q8qGvF_9E`)
        .then(function(response){
            return response.json()
        })

        //save API fetch response to {results}
        .then(function(data){
            setResults(data)
            navigate("/searchbooks")
            
            //if(results.length > 0){return <Navigate to="/searchbooks"/> }
            //setTitle("")
        })   
    }
    
    // function redirectHome(){
    //     on
    // }
    return (
        <div >
           
            <h1  style={{color: "blue", cursor: "pointer", display: "inline"}} onClick={()=>navigate('/')}>ReadWorld</h1> ||
            <h1  style={{color: "red", cursor: "pointer", display: "inline"}} onClick={()=>navigate('/insights')}>Insight</h1>

            <div>
                <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem"}}>
                    {/* <NavLink to="/">Home</NavLink> {" | "}  */}
                    {/* <NavLink to="/searchbooks">Search Book</NavLink> {" | "}  */}
                    {/* <NavLink style={{textAlign: "right", color: "red"}} to="/insights">Insights</NavLink> */}

                    <h1 style={{cursor: "default"}}>Search for your favorite book </h1>
                    <label><img src="https://cdn-icons.flaticon.com/png/128/3330/premium/3330314.png?token=exp=1660416680~hmac=43594f12b73843ee4d6ecc51b981383e" width="30" height="30"/></label>
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
            </div>
            {/* <card style={{backgroundColor: "blue", position: "wide"}}>d</card> */}
            {/* <body style={{backgroundColor: "red"}}></body> */}
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