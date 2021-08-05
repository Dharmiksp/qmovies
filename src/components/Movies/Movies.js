import {Fragment} from 'react';
import Header from '../UI/Header/Header';
import classes from './Movies.module.css';

const MovieList = () => {
    return (
        <Fragment>
            <div className={classes.background}>
            <Header/>
            <MovieList/>
            </div>
        </Fragment>
    )
};

export default MovieList;