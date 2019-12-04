import React, {Component} from 'react';
import ToWatch from "../../components/Movies/ToWatch/ToWatch";
import nanoid from 'nanoid';
import WatchList from "../../components/Movies/WatchList/WatchList";

class MoviesContainer extends Component {
    state = {
        movies: [
            {title: 'The Shawshank Redemption', id: nanoid()},
            {title: 'Her', id: nanoid()},
            {title: 'A Beautiful Mind', id: nanoid()},
        ],
        wishList: '',
    };
    changeWishList = (event) => {
        event.preventDefault();
        this.setState({wishList: event.target.value});
    };
    addCurrentWishList = () => {
        const movies = [...this.state.movies];
        if(movies[movies.length - 1].title !== this.state.wishList){
            movies.push({title: this.state.wishList, id: nanoid()});
            this.setState({movies, wishList: ''});
        } else {
            alert('You\'ve already have it on your wish list');
        }
    };
    changeTitle = (event, id) => {
        event.persist();
        this.setState(prevState => {
            const movies = [...prevState.movies];
            const index = movies.findIndex(film => film.id === id);
            const film = {...movies[index]};
            film.title = event.target.value;
            movies[index] = film;
            return {...prevState, movies}
        });
    };
    render() {
        return (
            <div className='MoviesContainer'>
                <ToWatch
                    onChange={(event) => this.changeWishList(event)}
                    formSubmit={this.addCurrentWishList}
                    valToWatch={this.state.wishList}
                />
                <WatchList
                    movies={this.state.movies}
                    changeTitle={this.changeTitle}
                />
            </div>
        );
    }
}

export default MoviesContainer;