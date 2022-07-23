import React from 'react';
import './FeatureMovie.css';

export default ({item}) => {
    let firstDate = new Date(item.first_air_date);

    let genres = [];

    for (let items in item.genres) {
        genres.push(item.genres[items].name);
    }

    let percentage = item.vote_average * 100

    return (
        <section className="featured" style={
            {
                backgroundSize: 'cover',
                backgrondPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }
        }>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{percentage.toFixed(1)} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="buttons">
                        <a href={`/watch/${item.id}`}>▶ Assistir</a> 
                        <a href={`/list/add/${item.id}`}>+ Minha Lista</a> 
                    </div>
                    <div className="featured-genres"><strong>Gêneros: {genres.join(', ')} </strong></div>
                </div>
            </div>
        </section>
    )
}