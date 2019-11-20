import React from 'react'

const Movie = props => {
  return (
    <>
      <section className="movie-section">
        <section className="title">{props.title}</section>
        <section className="poster">
          <section className="poster-border">
            <img
              src={
                'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' +
                props.poster_path
              }
            />
          </section>
        </section>
        <section className="date">{props.released}</section>
        <section className="overview">{props.overview}</section>
      </section>
    </>
  )
}
export default Movie
