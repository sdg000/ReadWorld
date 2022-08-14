import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function SearchBooks({results, title}){
    const {items} = results
//     let navigate =useNavigate()
//    if(results.length > 0){return <navigate to="/searchbooks"/> }
    console.log(items, "from searchbooks")
    return (
        <div style={{display: "flex"}}>
            <nav style={{borderRight: "solid 1px", padding: "1rem"}}>
                <h3>Search Results for {title}</h3>
                {items.map((item) => (
                    <NavLink 
                        style={({isActive}) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            }
                        }}
                    to={`/searchbooks/${item.id}`}
                    key={item.id}
                    >
                        {item.volumeInfo.title}
                    </NavLink>
                ))}
            </nav>
            <Outlet/>
        </div>
    )
}
export default SearchBooks