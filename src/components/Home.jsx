import React, { useState, useEffect } from 'react';
import { Content, ContainerImage, ContainerCards } from '../layout/Home-styled';
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
        <Content>
            <ContainerImage>
                <img src={Jordan} alt='imagem de apresentação dos airs Jordan' />
                <div className="box-apresentation">
                    <h1>A melhor loja de Jordan</h1>
                    <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
                </div>
            </ContainerImage>
            <ContainerCards>
                <h1>Destaques</h1>
                <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
                <div className="box-products">
                    {data.map((item, key) =>
                    {
                        return(
                            <div key={key} className="card">
                                <img src={require(`./images/${item.src}`)} alt='tenis air jordan' />
                            </div>
                        )
                    })}
                </div>
            </ContainerCards>
        </Content>
    )
}
