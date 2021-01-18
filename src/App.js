import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movies from './components/Movies';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&i=tt3896198&apikey=8d804421`;
		console.log('searchValue', searchValue);
		console.log('url', url);

		const response = await fetch(url);
		const responseJson = await response.json();
		console.log('response', response);
		console.log('responseJson', responseJson);
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		let newFavouriteList = [];
		let newMovieList = [];
		if (!(favourites.includes(movie))) {
			if (favourites.length < 5) {
				newFavouriteList = [...favourites, movie];
				setFavourites(newFavouriteList);
				saveToLocalStorage(newFavouriteList);
				let tempMovies = movies.slice(0);
				const index = tempMovies.indexOf(movie);
				if (index > -1) {
					tempMovies.splice(index, 1);
					setMovies(tempMovies);
				}
			} else {
				alert("Max movies(5) already nominated. Try removing some and retry. Click 'OK' to continue");
			}
		}

	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
		let newMovieList = [];
		if (!(movies.includes(movie))) {
			newMovieList = [...movies, movie];
			setMovies(newMovieList);
		}
	};

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Nominees' />
			</div>
			<div className='row'>
				<Movies
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<Movies
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>

		</div>
	);
};

export default App;
