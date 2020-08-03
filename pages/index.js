import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';
import { getMovies } from '../actions';

const Home = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resMovies = await getMovies();
      setMovies(resMovies);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='home-page'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <SideMenu />
            </div>
            <div className='col-lg-9'>
              <Carousel />
            </div>
            <div className='row'>
              <MovieList movies={props.movies} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();
  return {
    movies,
  };
};

export default Home;
