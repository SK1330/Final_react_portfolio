import React from 'react'
import styled from 'styled-components'
import resume from '../Images/saurabh.jpeg'
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">

                <h4>I am <span>Saurabh Kavhar</span></h4>

                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde sint eaque id repudiandae cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, consectetur.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Services</p>
                    </div>
                    <div className="info">
                        <p> : Saurabh Sanjay Kavhar</p>
                        <p> : 24 Years</p>
                        <p> : Indian</p>
                        <p> : English, Hindi, Marathi</p>
                        <p> : Pune, Maharashtra</p>
                        <p> : Freelancer</p>
                    </div>
                </div>

                <PrimaryButton title={'Downlaod CV'}/>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
        margin-top: 5rem;
        display: flex;
        @media screen and (max-width:1000px) {
          flex-direction: column;
          .left-content{
              margin-bottom: 2rem;
          }
        }
        .left-content{
            width: 100%;
            img{
                width: 90%;
            }

        }
        .right-content{
            h4{
                font-size: 2rem;
                color: var(--white-color);
                span{
                    font-size: 2rem;
                }
            }
            .paragraph{
                padding: 1rem 0;
            }
            .about-info{
                display: flex;
                padding-bottom: 1.4rem;
                .info-title{
                    padding-right: 1rem;
                    p{
                        font-weight: 600;
                    }
                }
                .info-title, .info{
                    p{
                        padding: .3rem 0;
                    }
                }
            }
        }

`;

export default ImageSection