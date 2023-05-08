import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../../app/page';

describe('Home', () => {
  it('renders the mission statement', () => {
    render(Home());
    const mission = screen.getByText('Mission');
    expect(mission).toBeInTheDocument();
  });

  it('renders the headline', () => {
    render(Home());
    const headline = screen.getByText('This is the headline');
    expect(headline).toBeInTheDocument();
  });

  it('renders the "Learn more" button', () => {
    render(Home());
    const button = screen.getByText('Learn more about our mission');
    expect(button).toBeInTheDocument();
  });

  it('renders three cards', () => {
    render(Home());
    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(3);
  });
});
