import React from 'react'
import Title from './Title';
import styled from 'styled-components'
import InnerLayout from '../Styles/Layout2';
import ProgressBar from './ProgressBar';

function Skills() {
  return (
    <SkillsStyled>
        
                <Title title={'My Skills'} titlespan={'My Skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                        title={'HTML5'}
                        width={'80%'}
                        text = {'80%'}
                        />
                         <ProgressBar 
                        title={'CSS3'}
                        width={'90%'}
                        text = {'90%'}
                        />
                         <ProgressBar 
                        title={'JavaScript'}
                        width={'85%'}
                        text = {'85%'}
                        />
                         <ProgressBar 
                        title={'Bootstrap'}
                        width={'90%'}
                        text = {'90%'}
                        />
                         <ProgressBar 
                        title={'HTML5'}
                        width={'80%'}
                        text = {'80%'}
                        />
                         <ProgressBar 
                        title={'HTML5'}
                        width={'80%'}
                        text = {'80%'}
                        />
                    </div>
                </InnerLayout>
            
    </SkillsStyled>
  )
}

const SkillsStyled = styled.section`
        .skills{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            @media screen and (max-width:800px) {
            grid-template-columns: repeat(1, 1fr);
              
            }
        }

`;
export default Skills