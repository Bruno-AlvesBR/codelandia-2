import React from 'react';
import { Content } from '../layout/Navbar-styled';

export default function Navbar() 
{
    return (
        <Content>
            <nav>
                <div className="container-navbar">
                    <header>
                        <p>Ganhe R$ 10,00 de desconto no frete</p>
                    </header>
                    <main>
                        <h1>JordanShoes</h1>
                    </main>
                </div>
            </nav>
        </Content>
    )
}
