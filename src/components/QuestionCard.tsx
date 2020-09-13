import React from 'react';
// Types
import { AnswerObject } from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';
import { Button, Card } from '@material-ui/core';

type Props = {
  question: string;
  category: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  category,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <Card className='mdc-card demo-card'>
    <Wrapper>
      <p className='number'>
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p className='category'>Category: {category}</p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}>
            <Button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </Button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  </Card>
);

export default QuestionCard;
