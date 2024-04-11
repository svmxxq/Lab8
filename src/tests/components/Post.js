import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Post from '../components/Post';

const mockPost = {
    id: 1,
    title: 'Test Post',
    content: 'This is a test post.',
};

test('renders Post component', () => {
    const { getByText } = render(
        <Provider store={store}>
            <Post post={mockPost} />
        </Provider>
    );

    const titleElement = getByText(mockPost.title);
    const contentElement = getByText(mockPost.content);

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
});


