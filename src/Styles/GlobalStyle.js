import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
        :root{
            --primary-color : #007bff;
            --primary-color-light : #057fff;
            --secondary-color : #6c757d;
            --background-dark-color: #10121a;
            --background-dark-color-2: #191d28;
            --border-color: #2e344e;
            --background-light-color: #f1f1f1;
            --background-light-color-2: rgba( 3,127, 255, .3);
            --white-color: #fff;
            --font-light-color: #a4acc4;
            --font-dark-color: #313131;
            --font-dark-color-2: #151515;
            --sidebar-dark-color:#191d2b;
            --scrollbar-bg-color: #383838;
            --scrollbar-thumb-color: #6b6b6b;
            --scrollbar-track-color: #383838;
        }

        .light-theme{
            --primary-color : #007bff;
            --primary-color-light : #057fff;
            --secondary-color : #6c757d;
            --background-dark-color: #f1f1f1;
            --background-dark-color-2: #e4e4e4;
            --border-color: #cdced8;
            --background-light-color: #f1f1f1;
            --background-light-color-2: rgba( 3,127, 255, .3);
            --white-color: #fff;
            --font-light-color: #313131;
            --font-dark-color: #313131;
            --font-dark-color-2: #151515;
            --sidebar-dark-color:#e4e4e4;
            --scrollbar-bg-color: #383838;
            --scrollbar-thumb-color: #6b6b6b;
            --scrollbar-track-color: #383838;

        }

        .dark-theme{
            --primary-color : #007bff;
            --primary-color-light : #057fff;
            --secondary-color : #6c757d;
            --background-dark-color: #10121a;
            --background-dark-color-2: #191d28;
            --border-color: #2e344e;
            --background-light-color: #f1f1f1;
            --background-light-color-2: rgba( 3,127, 255, .3);
            --white-color: #fff;
            --font-light-color: #a4acc4;
            --font-dark-color: #313131;
            --font-dark-color-2: #151515;
            --sidebar-dark-color:#191d2b;
            --scrollbar-bg-color: #383838;
            --scrollbar-thumb-color: #6b6b6b;
            --scrollbar-track-color: #383838;
        }


        *{
            margin:0;
            padding:0;
            box-sizing : border-box;
            list-style:none;
            text-decoration:none;
            font-family: 'Nunito', sans-serif;
            font-size: 1.2rem;
        }

        body{
            background-color: var(--background-dark-color);
            color: var(--font-light-color);
        }
        body::-webkit-scrollbar{
            width: 10px;
            background-color: var(--scrollbar-bg-color);
        }
        body::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background-color: var(--scrollbar-thumb-color);
        }
        body::-webkit-scrollbar-track{
            border-radius: 10px;
            background-color: var(--scrollbar-bg-color);
        }
        a{
            font-family: inherit;
            color: inherit;
            font-size: inherit;
            font-size: 1rem;
        }
        h1{
            font-size: 4rem;
            color: var(--white-color);
            span{
                font-size: 4rem;
                @media screen and (max-width:576px) {
                font-size: 2rem;
            }
            }
            @media screen and (max-width:576px) {
                font-size: 2rem;
            }
        }
        span{
            color: var(--primary-color);
        }

        //Hamburger Menu

        .hamburgermenu{
              position: absolute;
              right: 5%;
              top: 5%;
              z-index: 100;
              display: none;
              svg{
                  font-size: 3rem;
              }
          }
          .nav-toggle{
              transform: translateX(0%);
              z-index: 20;
          }
        @media screen and (max-width:1200px){
          .hamburgermenu{
              display: block;
          }
        }

        /* Golbal Media Quiries */
`;

export default GlobalStyle;