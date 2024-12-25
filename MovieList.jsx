import React, { useState } from "react";
import image from "./img/image1.jpeg";


function MovieList() {
    
    const person = {
        name: 'Arnold Schwarzenegger',
        theme: {
            backgroundColor: 'black',
            color: ''
        }
    };
    const MovieList = [
        {  id: 1,
            title: "Terminator",
            description: "Action Movie",
            showDetails: false,
            genre: "Action"
        },{
            id: 2,
            title: "Commando",
            description: "Action Movie",
            showDetails: false, 
            genre: "Action"
        },{
            id: 3,
            title: "Interview with the Vampire",
            description: "Vampire movie",
            img: "img/image1.jpeg",
            showDetails: false,
            genre: "Horror"
        }];
        
        const [movies, setMovies] = useState(MovieList)
        // const [showDetails, setShowDetails] = useState(false)

        const updateMovie = (selectedMovie) => {
            const updatedMovies = movies.map (movie => 
                movie === selectedMovie ? 
                { ...movie, showDetails: !movie.showDetails }
                : movie 
            )
            setMovies(updatedMovies)
        }

        const removeMovie = (index) => {
            const updatedMovies = movies.filter((_, i) => i !== index);
            setMovies(updatedMovies);

        }
        
        return (
        <>
            <ul>
                {
                    movies.map(movie => (
                        <li key={movie.id} style={{backgroundColor: 'black', color: 'white', height: '86px', width: '1236px', padding: '40px'}}>
                            <button onClick={() => updateMovie(movie)}>{movie.title}</button>
                            <br></br>
                            {movie.showDetails && <p>{movie.description}</p>}
                        </li>

                    ))}

                    <h1>Movie List</h1>
                    
                    <ul>
                        {movies.map((movie, index) => (
                        <li key={index}>
                            {movie.title}
                            <button onClick={() => removeMovie(index)}>Remove</button>
                        </li>
                        ))}

                    </ul>
                    <h1>Genre</h1>
                    <ul>
                        {movies.map((movie, index) => (
                            movie.genre === "Action" ? 
                            <li key={index}>
                            {movie.title}
                            <button onClick={() => removeMovie(index)}>Remove</button>
                        </li>
                                :
                                null
                            
                        ))}
                    </ul>
                    
            </ul>

        </>
    )
};

export default MovieList;