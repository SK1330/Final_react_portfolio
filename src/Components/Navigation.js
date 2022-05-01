import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../Images/saurabh.jpeg'

function Navigation() {


  return (
    <NavigationStyled>
        <div className="avatar">
            <img src={avatar} alt="" />
        </div>
        <ul className='nav-items'>
            <li className="nav-item">
                <NavLink to="/" > Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" > About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/resume" > Resume</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/portfolio"> Portfolio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/blogs" > Blogs</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact"> Contact</NavLink>
            </li>
        </ul>

        <footer className="footer">
            <p>
                @2022 My Portfolio
            </p>
        </footer>


    </NavigationStyled>
  )
}

const NavigationStyled = styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        border-right:2px solid var(--border-color);

        .avatar{
            width: 100%;
            border-bottom: 1px solid var(--border-color);
            text-align: center;
            padding: 1rem 0;
            img{
                width: 70%;
                border-radius: 50%;
                border:8px solid var(--border-color);
            }
        }

        .nav-items{
            width: 100%;
            text-align: center;
            .active{
                background-color: var(--primary-color);
            }
            li{
                display: block;
                a{
                    display: block;
                    padding: 0.3rem 0;
                    position: relative;
                    z-index: 4;
                    text-transform: uppercase;
                    transition: all .4s ease-in-out;
                    font-weight: 600;
                    letter-spacing: 1px;
                    color: var(--white-color);
                  
                    &:hover{
                        cursor: pointer;
                    }
                    &::before{
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 1rem;
                        width: 0%;
                        height: 50%;
                        background-color: var(--primary-color);
                        transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
                        z-index: 3;
                        opacity: 0.25;
                        transform-origin: right;
                    }
                }
                a:hover::before{
                        width: 100%;
                        height: 100%;

                }
            }
        }
 
        footer{
            border-top: 1px solid var(--border-color);
            width: 100%;
            p{
                padding: 2rem 0;
                font-size: 1rem;
                display: block;
                text-align: center;
            }
        }
`;

export default Navigation;