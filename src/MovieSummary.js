import React from 'react';

function MovieSummary({ movie }) {
    const handleBooking = () => {
        const userDetails = {
          movieName: movie.show.name,
          // Add other relevant details as needed
        };
      
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
      };
      

  return (
    <div>
      <h1>{movie.show.name}</h1>
      <img
        src={movie.show.image && movie.show.image.medium}
        alt={movie.show.name}
      />
      <p>{movie.show.summary}</p>
      <button onClick={handleBooking}>Book Ticket</button>
    </div>
  );
}

export default MovieSummary;
