import React from 'react'
import InnerLayout from '../Styles/Layout2'
import styled from 'styled-components'
import Title from './Title';
import ServiceCard from './ServiceCard';
import dummy from '../Images/saurabh.jpeg'

function ServiceSection() {
    return (
        <InnerLayout>
            <ServiceSectionStyled>
                <Title title={'Services'} titlespan={'Services'} />
                <div className="services">
                    <ServiceCard
                        image={dummy}
                        title={'Web Design'}
                        paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, reprehenderit!'}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            image={dummy}
                            title={'Web Design'}
                            paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, reprehenderit!'}
                        />
                    </div>

                    <ServiceCard
                        image={dummy}
                        title={'Web Design'}
                        paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, reprehenderit!'}
                    />
                </div>


            </ServiceSectionStyled>
        </InnerLayout>
    )
}


const ServiceSectionStyled = styled.section`
        .services{
            margin-top: 5rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1.5rem;
            @media screen and (max-width:1200px) {
                grid-template-columns: repeat(2, 1fr);      
            }
            @media screen and (max-width:800px) {
                grid-template-columns: repeat(1, 1fr);      
            }

            .mid-card{
                margin: 0 1.3rem;
            }
            @media screen and (max-width:1000px) {
                    .mid-card{
                        margin: 0;
                    }
        }
        }

`;
export default ServiceSection