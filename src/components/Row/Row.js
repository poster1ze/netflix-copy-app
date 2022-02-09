import React, {useEffect, useState} from "react";
import classes from './Row.module.css'
import Axios from "../../services/axios";

export const Row = ({title, fetchUrl, isLargeLow = false}) => {

    const [movies, setMovies] = useState([])

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await Axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className={classes.Row}>
            <h2>{title}</h2>

            <div className={classes.RowPosters}>

            {movies.map((movie) => (
                ((isLargeLow && movie.poster_path) || (!isLargeLow && movie.backdrop_path)) && (
                    <img
                        className={`${classes.RowPoster} ${isLargeLow && classes.RowPosterLarge}`}
                        key={movie.id}
                        src={`${baseUrl}${
                            isLargeLow ? movie.poster_path : movie.backdrop_path
                        }`}
                alt={movie.name}
                />
                    )
            ))}
            </div>
        </div>
    )
}