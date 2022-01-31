import React from 'react';
import { 
    Nav,
    Header,
    Main
} from '../layout/Navbar-styled';

export default function Navbar() 
{
    return (
        <Nav>
            <Header>
                <p>Ganhe R$ 10,00 de desconto no frete</p>
            </Header>
            <Main>
                <h1>JordanShoes</h1>
            </Main>
        </Nav>
    )
}