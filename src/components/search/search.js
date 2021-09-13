import React from "react";
import "./search.css";

const input = React.createElement("input", {className:"searchInput", placeholder: "What do you want to watch?"});
const button = React.createElement("button",{className:"searchBtn"}, "search")

const Search = props =>{
    return(          
        React.createElement("div",{className: "searchDiv"},input,button)
    )
}

export default Search;