import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfolioPage from "./Pages/PortfolioPage";
import BlogsPage from "./Pages/BlogsPage";
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from "@material-ui/core";
import { useState } from "react";
// import Brightness4Icon from '@material-ui/icons/Brightness4'
// import { Switch } from "@material-ui/core";
// import { useEffect } from "react";



function App() {

  const [navToggle, setNavToggle ] = useState(false);
// const [theme, setTheme] = useState('dark-theme');
// const [checked, setChecked] = useState();

// useEffect(()=>{
//   document.documentElement.className = theme;
// }, [theme]);

// const themeToggler = () => {

//       if (theme === 'light-theme'){
//         setTheme('dark-theme');
//         setChecked(false)
//       }
//       else {
//         setTheme('light-theme');
//         setChecked(true)
//       }
// }


  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      <div className="hamburgermenu">
        <IconButton onClick={() => setNavToggle(!navToggle)} >
          <MenuIcon/>
        </IconButton>
      </div>
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        {/* <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
            value=""
              checked={checked}
              onChange={themeToggler}
              inputProps={{ 'aria-label': 'controlled' }}
              size='medium'
              onClick={themeToggler}
            />
          </div>
        </div> */}


        <Routes>
          <Route path="/" element={< HomePage />}></Route>
          <Route path="/about" element={< AboutPage />}></Route>
          <Route path="/resume" element={< ResumePage />}></Route>
          <Route path="/portfolio" element={< PortfolioPage />}></Route>
          <Route path="/blogs" element={< BlogsPage />}></Route>
          <Route path="/contact" element={< ContactPage />}></Route>

        </Routes>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
    position: relative;
    margin-left: 16.3rem;
    min-height: 100vh;
    @media screen and (max-width:1200px){
      margin-left: 0px;
        }
    /* background-color: rebeccapurple; */

    .light-dark-mode{
      position: fixed;
      right: 0;
      top: 10%;
      background-color: var(--background-light-color-2);
      width: 6.5rem;
      height: 3rem;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        display: flex;
        align-items: center;
        font-size: 1.7rem;
        color: var(--white-color);
      }
    }
   .lines{
     position: absolute;
     min-height: 100%;
     width: 100%;
     display: flex;
     justify-content: space-evenly;
     z-index: -1;
     .line-1, .line-2, .line-3, .line-4{
       width: 1px;
       min-height: 100vh;
       background-color: var(--border-color);
       z-index: -1;
       opacity: .6;
     }
   }
`;

export default App;
