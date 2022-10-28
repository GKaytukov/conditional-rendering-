import { useState } from 'react'

const genres = ['animation', 'action-adventure', 'classic', 'drama', 
'horror', 'family', 'mystery']

//Defining things that don't change 

function Movies () { //Setting the variable 
    const [movieList, setMovieList] = useState ()
    const getMovies = (genre) => {
        fetch(`https://api.sampleaspis.com/movies/${genre}`)
        .then (response => response.json())
        .then (movies => setMovieList)
        .catch (console.error)

    }

    return (
        <>
        <div className='button-list'>   
            {genres.map(genre => ( //We are making a list of buttons 
                <button key={genre} onClick={() => getMovies(genre)}>
                {genre.toUpperCase()}
                </button>
            ))}

        </div>
        < div className='movie-list'>
            {!movieList
            ? <p>Pick a Genre, any Genre!.</p>
            : movieList.map(movie => (
                <p key={movie.id}>{movie.title}</p>
            ))}
        </div>
        </>
    )

}

export default Movies 