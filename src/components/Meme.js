import React from 'react';
import styled from 'styled-components';
import memesData from '../memesData'



 function Meme() {

    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);
    }

    return (
        <Main>
            
            <Div className='form'>
                <input type='text' placeholder='top text' />
                <input type='text' placeholder='bottom text' />
                <Button className='meme-button' onClick={getMemeImage} >Get a new meme image</Button>
            </Div>
            <Img src={memeImage} className='meme-img' />
        </Main>
    )
}

const Main = styled.main`
    padding: 20px;
`
const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: white;
    background: linear-gradient(90deg, #672280 1.18%, #A626D3 100% );
    grid-column: 1 / -1;
    cursor: pointer;
`

const Div = styled.div`
   display: grid;
   grid-template: 40px 40px / 1fr 1fr;
   gap: 10px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
`

export default Meme;