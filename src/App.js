import React, { useState, useEffect } from 'react'
import Movie from './components/Movie'

import axios from 'axios'

const App = () => {
  const [movieInfo, setMovieInfo] = useState([])

  const getDataFromAPI = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=a02ec72f928929771b3511a7ac7d8069'
    )
    setMovieInfo(response.data.results)
  }

  useEffect(() => {
    getDataFromAPI()
  }, [])

  return (
    <>
      <main>
        <section>
          {movieInfo.map(movie => {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                date={movie.released}
                poster_path={movie.poster_path}
                overview={movie.overview}
              />
            )
          })}
        </section>
      </main>
    </>
  )
}
export default App
