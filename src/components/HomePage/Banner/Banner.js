import React, {useEffect, useState} from "react";
import classes from './Banner.module.css';
import Axios from '../../../services/axios';
import Requests from "../../../services/requests";

export const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await Axios.get(Requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                    ]
            )
            return request
        }

        fetchData()
    }, [])

    const Truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

    return (
        <div className={classes.Banner} style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "center, center",
        }}>

            <div className={classes.BannerContent}>
                <h1 className={classes.BannerTitle}>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className={classes.BannerButtons}>
                    <button className={classes.BannerBtn}>Play</button>
                    <button className={classes.BannerBtn}>My List</button>
                </div>

                <h1 className={classes.BannerDescription}>
                    {Truncate(movie?.overview,150)}
                </h1>
            </div>

            <div className={classes.BannerFade}></div>
        </div>
    )
}