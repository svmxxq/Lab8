import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AddPostForm from './components/AddPostForm';
import './App.css'; // Подключение стилей

// Ленивая загрузка PostList
const LazyPostList = React.lazy(() => import('./components/PostList'));

function App() {
    return (
        <Provider store={store}>
            <div className="app-container">
                <h1 style={{ textAlign: 'center' }}>Interactive Bulletin Board</h1>
                <AddPostForm />
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyPostList />
                </Suspense>
            </div>
        </Provider>
    );
}

export default App;
