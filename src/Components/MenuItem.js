import React from 'react'
import styled from 'styled-components'
import GitHub from '@material-ui/icons/GitHub'
import Pinterest from '@material-ui/icons/Pinterest'


function MenuItem({ menuItem }) {
  return (
    <MenuItemStyled>

      {
        menuItem.map((item) => {
          return <div className="grid-item" key={item.id} >
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.link1}>  <GitHub />  </a>
                  </li>
                  <li>
                    <a href={item.link2}>  <Pinterest />  </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title} </h6>
              <p>{item.description} </p>

            </div>
          </div>
        })
      }

    </MenuItemStyled>
  )
}


const MenuItemStyled = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        @media screen and (max-width: 920px) {
        grid-template-columns: repeat(2, 1fr);
          
        }
        @media screen and (max-width: 670px) {
        grid-template-columns: repeat(1, 1fr);
          
        }
        .grid-item{
          .portfolio-content{
            display: block;
            position: relative;
            h6{
              font-size: 1.5rem;
            }
            img{
              width: 100%;
              height: 30vh;
              object-fit: cover;
            }
            ul{
              transform: translateY(-100px);
              transition: all .4s ease-in-out;
              position: absolute;
                  left: 50%;
                  top: 40%;
                  opacity: 0;
            }

            .portfolio-image{
              &::before {

                content: "";
                position: absolute;
                left: 2%;
                top: 4%;
                transform: scale(1);
                height: 0;
                width: 0;
                transition: all .4s ease-in-out;

              }

              }
              .portfolio-image:hover{
                ul{
                  transform: translateY(0);
                  transform: translate(-50%, -50%);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  opacity: 1;
                  li{
                    background-color: var(--border-color);
                    display: flex;
                  align-items: center;
                  justify-content: center;
                 width: 3rem;
                 height: 3rem;
                  border-radius: 50%;
                  margin: 0 .5rem;
                  cursor: pointer;
                  &:hover{
                    background-color: var(--primary-color);
                  }
                  a{
                    display: flex;
                  align-items: center;
                  justify-content: center;
                  }
                  }
                  }
                  li:hover{
                    svg{
                      color: var(--white-color);
                    }
                  }
                  svg{
                    font-size: 1.6rem;

                  }
                
                &::before{
                height: calc(100% - 34%);
                width: calc(100% - 4%);
                background-color: var(--white-color);
                opacity: 0.8;
                transform-origin: left;
                transition: all .4s ease-in-out;

              }
            }
          }
        }

`;

export default MenuItem