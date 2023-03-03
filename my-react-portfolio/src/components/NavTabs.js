import React from 'react';
//import '../style'
function NavTabs ({ currentPage, handlePageChange }) {
    return (
        <ul className="navbar">
            <li className="navbar-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'active-nav' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className="navbar-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'active-nav' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
            <li className="navbar-item">
                <a
                    href="#aboutme"
                    onClick={() => handlePageChange('Aboutme')}
                    className={currentPage === 'Aboutme' ? 'active-nav' : 'nav-link'}
                >
                    Aboutme
                </a>
            </li>
            <li className="navbar-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'active-nav' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
        </ul>
    );
}
export default NavTabs;