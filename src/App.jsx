import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Filter from './components/Filter';
import Movie from './components/Movie';
import './App.css';


const App = () => {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

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
      <Filter
        popular={ popular }
        setFiltered={ setFiltered }
        activeGenre={ activeGenre }
        setActiveGenre={ setActiveGenre }
      />
      <div className='popular-movies'>
        {filtered.map((movie) => (
          <Movie key={ movie.id } movie={ movie } />
        ))}
      </div>
    </div>
  );
};

export default App;
