import styled, { createGlobalStyle } from 'styled-components';
// import BackgroundImage from './img/background.jpg';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  max-width: 100%;
  font-size: 18px;
}

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.2rem;

  .start {
    margin-top: 25%;
    padding: 2rem;
    font-size: 2rem;
  }

  .start-over {
    margin-top: 0.5rem;
    padding: 2rem;
    font-size: 2rem;
  }

  .score {
    font-size: 1.2rem;
    margin: 0.5rem;
  }

  .next {
    margin-top: 0.5rem;
  }

  h1 {
    line-height: 2rem;
    text-align: center;
  }
`;
