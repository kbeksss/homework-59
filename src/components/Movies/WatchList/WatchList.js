import React, {Component} from 'react';
import './WatchList.css';

import Movie from "./Movie/Movie";

// const WatchList1 = () => {
//     return (
//
//     );
// };


class WatchList extends Component {
    render() {
        console.log('[WatchList] render');
        return (
            <div className='WatchList'>
                <ul>
                    {this.props.movies.map(movie => (
                        <Movie
                            key={movie.id}
                            valTitle={movie.title}
                            changeTitle={(event) => this.props.changeTitle(event, movie.id)}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default WatchList;