import React from 'react';
import styled from 'styled-components';
import theme from '../styles/Global'

const MobileTitle = () => {
    
    return (
            <StyledMobileTitle>
                <h3>Portfolio and <div>Skills</div></h3>
            </StyledMobileTitle>       
        )
    }

    const StyledMobileTitle = styled.div`
        margin: 2rem 0;

         h3{
            color: ${theme.gray};
            font-weight: 400;
            text-align: center;
            
            div{
                font-weight: 400;
                font-size: 5vh;
                color: ${theme.primary};
            }
        }
    `

    export default MobileTitle