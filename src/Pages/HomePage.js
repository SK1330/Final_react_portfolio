import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function HomePage() {
    return (
        <HomePageStyled>
            {/* <div className="p-particles-js">
            <Particles/>
        </div> */}

            <div className="typography">
                <h1>Hi I'm <span>Saurabh Kavhar</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quaerat, impedit odio quam aut magnam? Porro iure ut tempore soluta eveniet aliquam voluptatem quia, nesciunt magni, veritatis quo praesentium deleniti!</p>
                <div className="icons">
                    <a href='https://facebook.com' className="icon i-facebook"> <FacebookIcon /></a>
                    <a href='https://github.com' className="icon i-github"><GithubIcon /></a>
                    <a href='https://linkedin.com' className="icon i-linkedin"><LinkedInIcon /></a>

                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
        width: 100%;
        height: 100vh;

        .typography{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 80%;
            
        }

        .icons{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                    
                }
                svg{
                    margin: .5rem;
                }
            }
        }
`;

export default HomePage