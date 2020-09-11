import styled, { createGlobalStyle } from 'styled-components';
// import BackgroundImage from './img/background.jpg';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  background: white;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  max-width: 100%;
  font-size: 18px;
}

* {
  box-sizing: border-box;
  font-family: 'Baloo Tammudu 2', sans-serif;
  margin: 0;
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.2rem;

  .score {
    font-size: 1.2rem;
    margin: 0;
  }

  h1 {
    font-family: 'Baloo Tammudu 2', sans-serif;
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;
  }

  .start,
  .next {
    cursor: pointer;
    background: #fff;
    color: black;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin: 1rem;
  }

  .start {
    font-size: 1.5rem;
    width: 200px;
    padding: 1.5rem 0.5rem 0.5rem;
  }

  .next {
    padding: 1.2rem 0.5rem 0.5rem;
  }
`;
