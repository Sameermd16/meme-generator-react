import React from 'react';
import styled from 'styled-components';



 function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [memeImage, setMemeImage] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(apiData => setMemeImage(apiData.data.memes))
    })

    function getMemeImage() {
        // const memesArray = memeImage.data.memes;
        const randomNumber = Math.floor(Math.random() * memeImage.length);
        const url = memeImage[randomNumber].url;
        setMeme((prevMeme) => {
            return({
                ...prevMeme, 
                randomImage: url
            })
        })
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme((prevMeme) => {
            return ({
                ...prevMeme,
                [name] : value
            })
        })
    }

    return (
        <Main>
            <Div className='form'>
                <input 
                    type='text' 
                    placeholder='top text'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type='text' 
                    placeholder='bottom text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <Button className='meme-button' onClick={getMemeImage} >Get a new meme image</Button>
            </Div>
            {/* <Img src={memeImage} className='meme-img' /> */}
            <div className="meme">
                <img src={meme.randomImage} className="meme--img"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
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