import React from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MainRoutes from './Routes';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <MainRoutes />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
