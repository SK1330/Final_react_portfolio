import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import ReviewsSection from '../Components/ReviewsSection';
import ServiceSection from '../Components/ServiceSection';
import Title from '../Components/Title';
import MainLayout from '../Styles/Layouts'

function AboutPage() {
  return (
   
      <MainLayout>
        <AboutStyled>
          <Title title={'About me'} titlespan={'About me'} />
          <ImageSection/>
          <ServiceSection/>
          <ReviewsSection/>
        </AboutStyled>

      </MainLayout>
   
  )
}


const AboutStyled = styled.section`
        
`;

export default AboutPage;
