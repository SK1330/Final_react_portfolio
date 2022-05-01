import React from 'react'
import styled from 'styled-components'

function PrimaryButton({ title }) {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
            background-color: var(--primary-color);
            padding: .8rem 2.5rem;
            color: var(--white-color);
            cursor: pointer;
            display: inline-block;
            font-size: inherit;
            text-transform: uppercase;
            position: relative;
            transition: all .4s ease-in-out;

            &::after{
                content: "";
                transition: all .4s ease-in-out;
                position: absolute;
                width: 0%;
                height: .2rem;
                left: 0;
                bottom: 0;
                opacity: .7;
            }
            &:hover::after{
                width: 100%;
                background-color: var(--white-color);
               
               
            }
`;

export default PrimaryButton