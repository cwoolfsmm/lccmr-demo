import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HomeClient } from './components/HomeClient';

describe('HomeClient', () => {
  it('renders a heading', () => {
    const mockData = {
      header: [{ headerTitle: 'Welcome to the Home Page', logo: { url: '/logo.png' } }],
      story: [],
      home: [{ featureStory: { title: 'Feature Story', subtitle: 'Subtitle', content: 'Content', mediaCollection: { items: [{ url: '/image.png' }] } } }],
    };

    render(<HomeClient data={mockData} />);

    expect(screen.getByText('Welcome to the Home Page')).toBeInTheDocument();
  });
});