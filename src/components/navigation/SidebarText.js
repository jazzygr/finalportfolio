import React from 'react';
import styled from 'styled-components'
import theme from '../styles/Global'

const SidebarText = () => {
    return (
        <Sidebar>
            <div className="fixed-misc">Jeff Graham Web Design and Development</div>
        </Sidebar>
    )
}

const Sidebar = styled.div`

.fixed-misc {
    position: fixed;
    top: 40%;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-transform: uppercase;
    font-size: 0.7rem;
    margin: 0.1rem;
    letter-spacing: 0.2rem;
    color: ${theme.primary};
    z-index: 8;
    @media (max-width: 1024px) {
        display: none;
    }
}

`
export default SidebarText