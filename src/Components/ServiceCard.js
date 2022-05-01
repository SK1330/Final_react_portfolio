import React from 'react'
import styled from 'styled-components'


function ServiceCard({image, title, paragraph}) {
  return (
    <ServiceCardStyled>
        <div className="container">
            <img src={image} alt="" width={'100px'} />
            <h4>{title}</h4>
            <p>{paragraph}</p>
        </div>
    </ServiceCardStyled>
  )
}

const ServiceCardStyled = styled.div`
        background-color: var(--background-dark-color-2);
        border: 1px solid var(--border-color);
        border-top: 8px solid var(--border-color);
        transition: all .4s ease-in-out;
        &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
        }
        @media screen and (max-width:1000px){
            &:not(:last-child){
                margin-bottom: 1rem;
            }
        }
        .container{
            padding: 1.5rem;
            h4{
                color: var(--white-color);
                font-size: 1.6rem;
                padding: 1rem 0;
                position: relative;
                &::after{
                    content: "";
                    width: 5rem;
                    background-color: var(--border-color);
                    height: 4px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    border-radius: 20px;
                }
            }
            p{
                padding: .5rem 0;
                font-size: 1.2rem;
            }
        }

`

export default ServiceCard ;