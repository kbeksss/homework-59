import React from 'react';
import './Joke.css';

const Joke = ({value}) => {
    return (
        <div className='Joke'>
            <span>{value}</span>
        </div>
    );
};

export default Joke;