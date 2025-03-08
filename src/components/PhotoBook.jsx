import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Page from './Page';
import '../styles/PhotoBook.css';

const PhotoBook = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(0);

    const pages = [
        {
            type: 'title',
            title: 'Title Page',
            subtitle: 'Below the title'
        },
        {
            type: 'content',
            image: '/images/photo1.jpg',
            text: 'Page 1 Text'
        }
    ];

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setDirection(1);
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setDirection(-1);
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="photobook">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Page page={pages[currentPage]} />
                </motion.div>
            </AnimatePresence>
            <div className="navigation-buttons">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                    className="nav-button"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === pages.length - 1}
                    className="nav-button"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PhotoBook;