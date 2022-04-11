import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { getCharacters } from './api';
import './style.css';
import Header from './header';
import VoteButton from './components/VoteButton';
import VoteCounter from './components/VoteCounter';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const chars = await getCharacters();

      const mappedCharacters = chars.map((char) => ({
        ...char,
        votes: 0,
      }));

      setCharacters(mappedCharacters);
    };

    fetchCharacters();
  }, []);

  const sortCharacters = (stateCopy) => {
    const sorted = stateCopy.sort(compare);
    setCharacters(sorted);
  };

  const compare = (a, b) => {
    if (a.votes > b.votes) {
      return -1;
    }
    if (a.votes < b.votes) {
      return 1;
    }
    return 0;
  };

  const vote = (id) => {
    const stateCopy = [...characters];
    const charIndex = stateCopy.findIndex((char) => char.id === id);

    const char = {
      ...stateCopy[charIndex],
      votes: stateCopy[charIndex].votes + 1,
    };

    stateCopy[charIndex] = char;
    setCharacters(stateCopy);
    sortCharacters(stateCopy);
  };

  return (
    <div className="App">
      <Header />
      <Container maxwidth="xl">
        <div className="row">
          {
                        characters.map((character) => (
                          <div className="column" key={character.id}>
                            <div className="card">
                              <div className="image">
                                <img src={`${character.thumbnail.path}.jpg`} alt={character.name} />
                              </div>
                              <div className="name">
                                { character.name }
                                <div className="id" id="idCharacter">
                                  { character.id }
                                </div>
                              </div>
                              <div className="bio">
                                { character.description }
                              </div>
                              <div className="btns">
                                <VoteButton clickHandler={() => vote(character.id)} />
                                <VoteCounter count={character.votes} />
                              </div>
                            </div>
                          </div>
                        ))
                        }
        </div>
      </Container>
    </div>
  );
}

export default App;
