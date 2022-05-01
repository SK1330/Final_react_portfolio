import styled from 'styled-components'
import React from 'react'

function ReviewItem({text}) {
  return (
    <ReviewItemStyled>
        <p>{text}</p>
    </ReviewItemStyled>
  )
}

const ReviewItemStyled = styled.div`
            
            padding: 2rem 1rem;
            border-left: 6px solid var(--border-color);
            background-color: var(--background-dark-color-2);
            position: relative;

            &::after{
                content: "";
                position: absolute;
                left: 2rem;
                border-width: .8rem;
                top: 100%;
                border-style: solid;
                border-color: var(--background-dark-color-2) transparent transparent var(--background-dark-color-2);

            }
            p{
                padding: 1rem 0;

            }
`;

export default ReviewItem