import React, { useEffect, useState } from 'react';
import MovieSummary from './MovieSummary';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      {selectedMovie ? (
        <MovieSummary movie={selectedMovie} />
      ) : (
        <div>
          <h1>Movie Listing</h1>
          <ul>
            {movies.map((movie) => (
              <li key={movie.show.id} onClick={() => handleMovieClick(movie)}>
                <h2>{movie.show.name}</h2>
                <img
                  src={movie.show.image && movie.show.image.medium}
                  alt={movie.show.name}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
