import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movies from './components/Movies';
import CollectionHeading from './components/CollectionHeading';
import SearchBox from './components/SearchBox';
import Nominate from './components/Nominate';
import WithdrawNomination from './components/WithdrawNomination';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [nominees, setNominees] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&type=movie&i=tt3896198&apikey=8d804421`;
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
		const movieNominees = JSON.parse(
			localStorage.getItem('react-movie-app-nominees')
		);

		if (movieNominees) {
			setNominees(movieNominees);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-nominees', JSON.stringify(items));
	};

	const addNominee = (movie) => {
		let newFavouriteList = [];
		let newMovieList = [];
		if (!(nominees.includes(movie))) {
			if (nominees.length < 5) {
				newFavouriteList = [...nominees, movie];
				setNominees(newFavouriteList);
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

	const withdrawNomination = (movie) => {
		const newFavouriteList = nominees.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setNominees(newFavouriteList);
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
				<CollectionHeading heading='Nominees' />
			</div>
			<div className='row'>
				<Movies
					movies={nominees}
					handleFavouritesClick={withdrawNomination}
					favouriteComponent={WithdrawNomination}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<CollectionHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<Movies
					movies={movies}
					handleFavouritesClick={addNominee}
					favouriteComponent={Nominate}
				/>
			</div>

		</div>
	);
};

export default App;