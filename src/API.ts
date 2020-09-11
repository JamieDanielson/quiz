import { shuffleArray } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}
/* 
let categoryList = [
  {
    trivia_categories: [
      { id: 9, name: 'General Knowledge' },
      { id: 10, name: 'Entertainment: Books' },
      { id: 11, name: 'Entertainment: Film' },
      { id: 12, name: 'Entertainment: Music' },
      { id: 13, name: 'Entertainment: Musicals & Theatres' },
      { id: 14, name: 'Entertainment: Television' },
      { id: 15, name: 'Entertainment: Video Games' },
      { id: 16, name: 'Entertainment: Board Games' },
      { id: 17, name: 'Science & Nature' },
      { id: 18, name: 'Science: Computers' },
      { id: 19, name: 'Science: Mathematics' },
      { id: 20, name: 'Mythology' },
      { id: 21, name: 'Sports' },
      { id: 22, name: 'Geography' },
      { id: 23, name: 'History' },
      { id: 24, name: 'Politics' },
      { id: 25, name: 'Art' },
      { id: 26, name: 'Celebrities' },
      { id: 27, name: 'Animals' },
      { id: 28, name: 'Vehicles' },
      { id: 29, name: 'Entertainment: Comics' },
      { id: 30, name: 'Science: Gadgets' },
      { id: 31, name: 'Entertainment: Japanese Anime & Manga' },
      { id: 32, name: 'Entertainment: Cartoon & Animations' },
    ],
  },
]; */

export enum Category {
  GENERAL_KNOWLEDGE = '9',
  ENTERTAINMENT_BOOKS = '10',
  ENTERTAINMENT_FILM = '11',
  ENTERTAINMENT_MUSIC = '12',
  ENTERTAINMENT_MUSICALS = '13',
  ENTERTAINMENT_TV = '14',
  ENTERTAINMENT_VIDEOGAME = '15',
  ENTERTAINMENT_BOARDGAME = '16',
  SCIENCE_NATURE = '17',
  SCIENCE_COMPUTERS = '18',
  SCIENCE_MATH = '19',
  MYTHOLOGY = '20',
  SPORTS = '21',
  GEOGRAPHY = '22',
  HISTORY = '23',
  POLITICS = '24',
  ART = '25',
  CELEBRITIES = '26',
  ANIMALS = '27',
  VEHICLES = '28',
  ENTERTAINMENT_COMICS = '29',
  SCIENCE_GADGETS = '30',
  ENTERTAINMENT_ANIME = '31',
  ENTERTAINMENT_CARTOON = '32',
}

export const fetchQuizQuestions = async (
  amount: number,
  category: Category,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
