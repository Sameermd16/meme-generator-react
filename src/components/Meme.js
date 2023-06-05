import react from 'react';
import styled from 'styled-components';



 function Meme() {
    return (
        <Main>
            <Form className='form'>
                <input type='text' placeholder='top text' />
                <input type='text' placeholder='bottom text' />
                <Button className='meme-button'>Get a new meme image</Button>
            </Form>
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
`

const Form = styled.form`
   display: grid;
   grid-template: 40px 40px / 1fr 1fr;
   gap: 10px;
`

export default Meme;