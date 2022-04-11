import React, { useState, useEffect } from 'react' ;
import { getCharacters } from './api';
import './style.css'
import { Container } from '@material-ui/core';
import Header from './header';
import VoteEvent from './VoteEvent';


const App = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        const fetchCharacters = async () => {
            setCharacters(await getCharacters());
        }

        fetchCharacters();
    }, [])

    console.log(characters);
    function votar(event) {
        console.log('event')
    }
    
    return (
        <div className = "App">
            <Header />
                <Container maxwidth = 'xl'>
                    <div class="row">   
                        {
                        characters.map((character) => 
                            <div class = "column">
                                <div class = "card">
                                    <div class = "image">
                                        <img src = { character.thumbnail.path + "." + "jpg" } />
                                        {/* img src=`${character.thumbnail.path}${character.thumbnail.extension}` */}
                                    </div>
                                    <div class = "name">
                                        { character.name }
                                        <div class = "id" id="idCharacter">
                                            { character.id }
                                        </div>
                                    </div>
                                    <div class = "bio">
                                        { character.description }
                                    </div>
                                    <div class = "btns">
                                        <VoteEvent valor={character.id} class = "voteibtn" />
                                        <span class = "vote-cnt"> 0 </span>
                                    </div>
                                </div>
                            </div>
                            )
                        }   
                    </div>
                </Container>
        </div>
    )

}

export default App;
