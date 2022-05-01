import styled  from 'styled-components'
import React from 'react'
import Title from './Title';
import InnerLayout from '../Styles/Layout2';
import ReviewItem from './ReviewItem';

function ReviewsSection() {
  return (
    
        <ReviewsSectionStyled>
                <Title title={'Reviews'} titlespan={' Reviews'}/>
                <InnerLayout>
                    <div className="reviews">
                        <ReviewItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod molestias .'}/>
                        <ReviewItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod molestias .'}/>

                    </div>
                </InnerLayout>
        </ReviewsSectionStyled>
  )
}

const ReviewsSectionStyled = styled.section`
            .reviews{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 2rem;
                        @media screen and (max-width:1200px) {
                            grid-template-columns: repeat(1, 1fr);      
                        }
                        


            }
`;

export default ReviewsSection