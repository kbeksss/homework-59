import React, {Component} from 'react';
import './Movie.css';
class Movie extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.valTitle !== this.props.valTitle;
    }
    render() {
        return (
            <li className='Movie'>
                <input type="text" onChange={this.props.changeTitle} value={this.props.valTitle}/>
                <button type='button' onClick={this.props.remove}>X</button>
            </li>
        );
    }
}

export default Movie;