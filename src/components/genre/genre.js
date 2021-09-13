import React from "react";
import "./genre.css";

const genres = 
[
    {
        id: 0,
        name: "All"
    },
    {
        id: 1,
        name: "Documentary"
    },
    {
        id: 2,
        name: "Comedy"
    },
    {
        id: 3,
        name: "Horror"
    },
    {
        id: 4,
        name: "Crime"
    }
];

class Genre extends React.PureComponent{
    render(){
        return(
            <div className = "genreDiv">
                {genres.map(genre => {
                   return <div className="genreItem" key={genre.id}>{genre.name}</div>
                })}
            </div>
        );
    }
}

export default Genre;