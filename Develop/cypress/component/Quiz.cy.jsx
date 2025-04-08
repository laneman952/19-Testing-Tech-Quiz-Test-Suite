import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

const questions = Array.from({ length: 10 }).map((_, i) => ({
    _id: `question-${i + 1}`,
    question: `Question ${i + 1}`,
    answers: [
      { text: 'Answer A', isCorrect: false },
      { text: 'Answer B', isCorrect: false },
      { text: 'Answer C', isCorrect: true },
    ],
    correctAnswer: 'Answer C',
  }));

describe('<Quiz /> Component Test', () => {
    beforeEach(() => {
        mount(<Quiz questions={questions} />);
    });

    it('renders the quiz component', () => {
        cy.get('.quiz').should('exist');
    });
});