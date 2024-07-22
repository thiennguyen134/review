import React from 'react';
import Header from './components/shared/Header';
import Main from './components/shared/Main';
import Footer from './components/shared/Footer';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
