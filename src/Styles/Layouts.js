import styled  from "styled-components";

 const MainLayout = styled.div`
        padding: 5rem;
        @media screen and (max-width: 670px) {
                padding: 3rem;      
        }
        /* @media screen and (max-width: 510px) {
                padding: 2.3rem;      
        } */
        @media screen and (max-width: 571px) {
                padding: 2.3rem .4rem;      
        }
        /* @media screen and (max-width: 400px) {
                padding: 2rem;      
        } */
`;

export default MainLayout;