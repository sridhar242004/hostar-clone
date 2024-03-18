// Movie.js
import React, { useState } from 'react';
import YouTube from 'react-youtube'; // Make sure to install the 'react-youtube' package

const Movie = ({ title, posterUrl, trailerUrl }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleClick = () => {
    setShowTrailer(!showTrailer);
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <h2>{title}</h2>
      <img
        src={posterUrl}
        alt={`${title} Poster`}
        style={{ cursor: 'pointer' }}
        onClick={handleClick}
      />
      {showTrailer && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Movie;
