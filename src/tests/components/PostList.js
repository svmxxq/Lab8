import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import PostList from '../components/PostList';

test('renders PostList component', () => {
    const { getByText } = render(
        <Provider store={store}>
            <PostList />
        </Provider>
    );

    const headerElement = getByText('Posts');

    expect(headerElement).toBeInTheDocument();
});


