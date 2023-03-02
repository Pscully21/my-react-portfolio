import React, { useState } from 'react';
import NavTabs from './NavTabs';
import home from './pages/home';
import aboutme from './pages/aboutme';
import contact from './pages/contact';
import portfolio from './pages/portfolio';
import resume from './pages/resume';
import footer from './pages/footer'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'portfolio') {
            return <portfolio />;
        }
        if (currentPage === 'resume') {
            return <resume />;
        }
        if (currentPage === 'about') {
            return <about />;
        }
        return <contact />;
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        
    )
}