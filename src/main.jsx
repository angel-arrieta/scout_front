import React from 'react';
import ReactDOM from 'react-dom/client';
import IndexPage from './pages/index.jsx';
import './pages/index.css';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <IndexPage />
    </React.StrictMode>
);
