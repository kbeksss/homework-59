import React from 'react';
import Joke from "./Joke/Joke";

const Jokes = (props) => {
    return (
        <div className='Jokes'>
            {props.jokes.map(joke => (
                <Joke
                    key={joke.id}
                    value={joke.value}
                />
            ))}
        </div>
    );
};

export default Jokes;