import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f7f6f8;
  padding: 2rem;
  text-align: center;
  width: 100%;
  min-width: 400px;
  max-width: 400px;
  font-size: 18px;
  line-height: 1.2;
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  button {
    cursor: pointer;
    user-select: none;
    text-transform: initial;
    margin: 0.5rem, 0;
    width: 100%;
    box-shadow: ${({ correct, userClicked }) =>
      correct
        ? 'inset 0 0 0 3px #66E1A3'
        : !correct && userClicked
        ? 'inset 0 0 0 3px #ff7070'
        : 'none'};
  }
  button:disabled {
    color: black;
  }
`;
