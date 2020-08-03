const MovieList = ({ movies }) => {
  const textShorten = (text, maxLength) => {
    return text && text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  };

  return (
    <>
      {movies.map((movie) => (
        <div className='col-lg-4 col-md-6 mb-4' key={movie.id}>
          <div className='card h-100'>
            <a href='#'>
              <img className='card-img-top' src={movie.image} alt='' />
            </a>
            <div className='card-body'>
              <h4 className='card-title'>
                <a href='#'>{movie.name}</a>
              </h4>
              <p className='card-text'>{textShorten(movie.description, 100)}</p>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>
                {movie.rating} &#9733; &#9733; &#9733; &#9733; &#9734;
              </small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
