import React, { useEffect } from 'react';

const Filter = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(popular);
            return;
        }

        const filtered = popular.filter((movie) => 
            movie.genre_ids.includes(activeGenre)
        );

        setFiltered(filtered);

    }, [activeGenre, popular]);

  return (
    <div className="filter-container">
        <button 
            className={ activeGenre === 0 ? "active" : "" } 
            onClick={ (e) => setActiveGenre(0) }
        >
            All
        </button>
        <button 
            className={ activeGenre === 35 ? "active" : "" }
            onClick={ (e) => setActiveGenre(35) }
        >
            Comedy
        </button>
        <button
            className={ activeGenre === 28 ? "active" : "" }
            onClick={ (e) => setActiveGenre(28) }
        >
            Action
        </button>
    </div>
  );
};

export default Filter;
