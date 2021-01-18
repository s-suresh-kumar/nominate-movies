import React from 'react';

const Movies = (props) => {
	const NominateteComponent = props.nominateComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex flex-wrap justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleNominationClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<NominateteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default Movies;
