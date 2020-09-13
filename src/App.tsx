import React, { useState } from 'react';
import './App.css';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
// Types
import { QuestionState, Difficulty, Category } from './API';
// styles
import { GlobalStyle, Wrapper } from './App.styles';
import { Button } from '@material-ui/core';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(questions);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Category.GENERAL_KNOWLEDGE,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // get user answer
      const answer = e.currentTarget.value;
      // check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // save answer in array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // move onto next question if not last question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Test Your Knowledge!</h1>
        {gameOver ? (
          <Button
            variant='contained'
            color='primary'
            size='large'
            className='start'
            onClick={startQuiz}>
            Start Quiz
          </Button>
        ) : null}
        {!gameOver ? <p className='score'>Score: {score}</p> : null}
        {loading && <p className='loading'>Loading Questions...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            category={questions[number].category}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <Button
            variant='contained'
            color='primary'
            className='next'
            onClick={nextQuestion}>
            Next Question
          </Button>
        ) : null}
        {userAnswers.length === TOTAL_QUESTIONS ? (
          <Button
            variant='contained'
            color='primary'
            size='large'
            className='start-over'
            onClick={startQuiz}>
            Start Over
          </Button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
