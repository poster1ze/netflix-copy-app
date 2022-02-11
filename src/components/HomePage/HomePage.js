import React from "react";
import classes from './HomePage.module.css'
import {Nav} from "./Nav/Nav";
import {Banner} from "./Banner/Banner";
import {Row} from "./Row/Row";
import Requests from "../../services/requests";

export const HomePage = () => {
    return (
        <div className={classes.Home}>
            <Nav />
            <Banner />
            <Row
            title={"NETFLIX ORIGINALS"}
            fetchUrl={Requests.fetchNetflixOriginals}
            isLargeLow
            />
            <Row title={"Trending Now"} fetchUrl={Requests.fetchTrending} />
            <Row title={"Top Rated"} fetchUrl={Requests.fetchTopRated} />
            <Row title={"Action Movies"} fetchUrl={Requests.fetchActionMovies} />
            <Row title={"Comedy Movies"} fetchUrl={Requests.fetchComedyMovies} />
            <Row title={"Horror Movies"} fetchUrl={Requests.fetchHorrorMovies} />
            <Row title={"Romance Movies"} fetchUrl={Requests.fetchRomanceMovies} />
            <Row title={"Documentaries"} fetchUrl={Requests.fetchDocumentaries} />
        </div>
    )
}