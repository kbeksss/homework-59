import React, {Component} from 'react';
import Jokes from "../../components/Jokes/Jokes";
import './JokesContainer.css';
import Button from "../../components/UI/Button/Button";

class JokesContainer extends Component {
    state = {
        jokes: []
    };
    async componentDidMount () {
        this.showNewJokes(1);
    }
    async showNewJokes (howMany) {
        const jokes = [];
        for(let i = 0; i < howMany; i++){
            jokes.push(await fetch('https://api.chucknorris.io/jokes/random'));
        }
        let allJokes = await Promise.all(jokes.map(joke=>joke.json()));
        const newJokes = allJokes.map(joke => {
            return {value: joke.value, id: joke.id}
        });
        this.setState({jokes: newJokes});
    }
    render() {
        return (
            <div className='JokesContainer'>
                <Button
                    onClick={() => this.showNewJokes(5)}
                    text='Show New Jokes'
                    type='button'
                />
                <Jokes jokes={this.state.jokes}/>
            </div>
        );
    }
}

export default JokesContainer;