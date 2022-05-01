import React from 'react'
import InnerLayout from '../Styles/Layout2'
import Title from './Title';
import styled from 'styled-components'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchooolIcon from '@material-ui/icons/School'

const businessicon = <BusinessCenterIcon />
const schoolicon = <SchooolIcon />

function Resume() {
    return (

        <ResumeStyled>
            <Title title={'Resume'} titlespan={'Resume'} />
            <InnerLayout>
                <div className='smallTitle'>
                    <p>{businessicon} </p>
                    <h3>Working Experience</h3>
                </div>
                <div className="resume-content">
                    <div className="left-content">
                        <p>2015-2020</p>
                    </div>
                    <div className="right-content">
                        <h5>Web design</h5>
                        <h6>Pune University</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor fugiat maxime vitae nostrum, eius non amet maiores dicta odit.</p>
                    </div>
                </div>
                <div className="resume-content">
                    <div className="left-content">
                        <p>2015-2020</p>
                    </div>
                    <div className="right-content">
                        <h5>Web design</h5>
                        <h6>Pune University</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor fugiat maxime vitae nostrum, eius non amet maiores dicta odit.</p>
                    </div>
                </div>
                <div className="resume-content">
                    <div className="left-content">
                        <p>2015-2020</p>
                    </div>
                    <div className="right-content">
                        <h5>Web design</h5>
                        <h6>Pune University</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor fugiat maxime vitae nostrum, eius non amet maiores dicta odit.</p>
                    </div>
                </div>
            </InnerLayout>
            <InnerLayout>
                <div className='smallTitle'>
                    <p>{schoolicon} </p>
                    <h3>Education </h3>
                </div>
                <div className="resume-content">
                    <div className="left-content">
                        <p>2015-2020</p>
                    </div>
                    <div className="right-content">
                        <h5>Web design</h5>
                        <h6>Pune University</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor fugiat maxime vitae nostrum, eius non amet maiores dicta odit.</p>
                    </div>
                </div>
                <div className="resume-content">
                    <div className="left-content">
                        <p>2015-2020</p>
                    </div>
                    <div className="right-content">
                        <h5>Web design</h5>
                        <h6>Pune University</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor fugiat maxime vitae nostrum, eius non amet maiores dicta odit.</p>
                    </div>
                </div>
                <div className="resume-content">
                    <div className="left-content">
                        <p>2015-2020</p>
                    </div>
                    <div className="right-content">
                        <h5>Web design</h5>
                        <h6>Pune University</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor fugiat maxime vitae nostrum, eius non amet maiores dicta odit.</p>
                    </div>
                </div>
            </InnerLayout>
        </ResumeStyled>
    )

}

const ResumeStyled = styled.section`

                .smallTitle{
                    display: flex;
                    align-items: center;
                    padding-bottom: 3rem;
                    p{
                        padding-right: 1rem;
                        svg{
                            font-size: 3rem;
                        }
                    }
                    h3{
                        color: var(--white-color);
                        font-size: 2rem;
                    }
                }

                .resume-content{
                    border-left: 1px solid var(--border-color);
                    display: flex;
                   
                    &:not(:last-child){
                        padding-bottom: 3rem;
                    }
                    .left-content{
                        width: 50%;
                        padding-left: 20px;
                        position: relative;
                        &::before{
                            content: "";
                            position: absolute;
                            left: -10px;
                            top: 5px;
                            height: 15px;
                            width: 15px;
                            border-radius: 50%;
                            border: 2px solid var(--border-color);
                            background-color: var(--background-dark-color);
                        }
                        p{
                            display: inline-block;
                            
                        }

                    }
                    .right-content{
                        p{
                            font-size: 1rem;
                            @media screen and (max-width:576px){
                                font-size: .8rem;
                                
                            }
                        }
                        padding-left: 5rem;
                        position: relative;
                    &::before{
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 30px;
                        width: 3rem;
                        height: 2px;
                        background-color: var(--border-color);
                    }
                        h5{
                            color: var(--primary-color);
                            font-size: 2rem;
                            padding-bottom: .5rem;
                            @media screen and (max-width:500px) {
                                font-size: 1rem;
                             }
                        }
                        h6{
                            padding-bottom:.5rem;
                            font-size: 1.5rem;
                            @media screen and (max-width:500px) {
                                font-size: 1rem;
                         }
                        }
                    }
                }
`;


export default Resume
