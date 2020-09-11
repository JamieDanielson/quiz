import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f7f6f8;
  border-radius: 5px;
  border: 1px solid #0085a3;
  padding: 1rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
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
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    width: 100%;
    padding: 1rem 0.5rem 0.5rem;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #ff5656, #c16868)'
        : 'linear-gradient(90deg, #483d8b, #483d8b)'};
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba (0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0 0.25);
    font-size: 1.2rem;
  }
`;
