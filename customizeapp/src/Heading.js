import React, { useState } from 'react';
import Heading from './Heading';
import './App.css';

function App()
{
    const [word, setWord] = React.useState('Eat');

function hadleClick()
{
    setWord('Drink')
}
    

    return(
        <div className="App1">
            <Heading message={word + "at little lemon"}/>
            <button onClick={handleClick}>Click here!</button>
        </div>
    );
}

export default App;