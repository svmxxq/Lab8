import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import AddPostForm from '../components/AddPostForm';

test('renders AddPostForm component', () => {
    const { getByPlaceholderText, getByText } = render(
        <Provider store={store}>
            <AddPostForm />
        </Provider>
    );

    const titleInput = getByPlaceholderText('Title');
    const contentInput = getByPlaceholderText('Content');
    const addButton = getByText('Add Post');

    expect(titleInput).toBeInTheDocument();
    expect(contentInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
});


