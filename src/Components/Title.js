import React from 'react'
import styled from 'styled-components';

function Title({title, titlespan}) {
  return (
    <TitleStyled>
        <h2>{title} <span>{titlespan}</span></h2>
    </TitleStyled>
  )
}

const TitleStyled = styled.div`
        position: relative;
        h2{
            color: var(--white-color);
            font-size: 2.8rem;
            font-weight: 600;
            text-transform: uppercase;
            position: relative;
            padding-bottom: .4rem;
            @media screen and (max-width:650px) {
                    font-size: 2.2rem;
                }
                @media screen and (max-width:420px) {
                    font-size: 1.7rem;
                }
            &::before{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 8rem;
                height: .30rem;
                background-color: var(--background-light-color-2);
                border-radius: 20px;
            }
            &::after{
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 3rem;
                height: .30rem;
                background-color: var(--background-light-color-2);
                border-radius: 20px;
            }
            span{
                font-weight: 600;
                color: rgba(25,29,43,.44);
                font-size: 4rem;
                position: absolute;
                left: 0%;
                top: 25%;
                z-index: -1;
                @media screen and (max-width:650px) {
                    font-size: 2.5rem;
                }
                @media screen and (max-width:470px) {
                    font-size: 2rem;
                }
            }
        }
`;

export default Title;