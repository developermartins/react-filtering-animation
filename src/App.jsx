import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';



const App = () => {

  const [popular, setPopular] = useState([]);

  const fetchPopularMovies = async () => {
    const moviesData = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=ff1c97e901f41b87534018df4bd86f50&language=en-US&page=1');

    const movies = await moviesData.json();
    setPopular(movies.results);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div className='app'>
      <div className='popular-movies'>
        {popular.map((movie) => (
          <Movie key={ movie.id } movie={ movie } />
        ))}
      </div>
    </div>
  );
};

export default App;
