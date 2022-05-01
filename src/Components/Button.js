import React from 'react'
import styled from 'styled-components'

function Button({filter, button}) {
  return (
    <AllButtonStyled>

        {
            button.map((but, i)=>{
                return <ButtonStyled key={i}  onClick={()=> filter(but)}>
                    {but}
                </ButtonStyled>
            })
        }
    </AllButtonStyled>
  )
}

const AllButtonStyled = styled.div`
            margin-bottom: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
`;

const ButtonStyled = styled.button`
                outline: none;
                border: none;
                background-color: var( --background-light-color-2);
                padding: .5rem 2rem;
                margin-bottom: .6rem;
                font-size: inherit;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:active , &:focus{
                    background-color: var(--primary-color);
                }
                &:hover{
                    background-color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
`;

export default Button