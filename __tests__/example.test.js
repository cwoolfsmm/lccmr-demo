import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HomeClient } from '@/app/components/HomeClient';

describe('HomeClient', () => {
  it('renders the headerTitle', () => {
    const mockData = {
      header: [
        {
          headerTitle: 'Welcome to LCCMR',
          logo: { url: '' },
        },
      ],
      story: [
        { id: 1, title: 'Story 1', content: 'Content for story 1' },
        { id: 2, title: 'Story 2', content: 'Content for story 2' },
      ],
      home: [
        {
          featureStory: {
            title: 'Feature Story Title',
            subtitle: 'Feature Story Subtitle',
            content: 'Feature story content goes here.',
            mediaCollection: {
              items: [
                { url: 'https://example.com/image1.jpg' },
                { url: 'https://example.com/image2.jpg' },
              ],
            }
          },
        },
      ],
    };

    const mockSetSelectedStory = jest.fn();

    jest.spyOn(React, 'useState').mockImplementation((initialValue) => [
      initialValue,
      mockSetSelectedStory,
    ]);

    // Mock handlers
    // const mockHandleOpenStory = jest.fn((story) => {
    //   mockSetSelectedStory(story);
    // });

    // const mockHandleCloseStory = jest.fn(() => {
    //   mockSetSelectedStory(null);
    // });

    render(<HomeClient data={mockData} />);
  
    expect(screen.getByText('Welcome to LCCMR')).toBeInTheDocument();
  });
});