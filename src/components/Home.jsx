import React, { useState, useEffect } from 'react';
import { 
    ContainerImage, 
    ContainerProducts,
    ContainerApresentationText,
    Card
} from '../layout/Home-styled';
import Jordan from './images/apresentation.jpg';
import axios from 'axios';

export default function Home() 
{ 
    const [data, setData] = useState([])
    useEffect(() =>
    {
        axios.get('https://bruno-alvesbr.github.io/codelandia-2/db.json')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <ContainerImage>
                <img src={Jordan} alt='imagem de apresentação dos airs Jordan' />
                <ContainerApresentationText>
                    <h1>A melhor loja de Jordan</h1>
                    <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
                </ContainerApresentationText>
            </ContainerImage>

            <ContainerProducts>
                <label>
                    <h1>Destaques</h1>
                    <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
                </label>
                {data.map((item, key) =>
                {
                    return(
                        <Card key={key}>
                            <img src={require(`./images/${item.src}`)} alt='tenis air jordan' />
                        </Card>
                    )
                })}
            </ContainerProducts>
        </>
    )
}