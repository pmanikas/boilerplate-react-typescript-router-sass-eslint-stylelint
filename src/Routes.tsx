import React, { lazy, Suspense } from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));

function MainRoutes() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Suspense>
    );
}

export default MainRoutes;
