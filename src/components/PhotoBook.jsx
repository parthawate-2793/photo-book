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
            title: 'Love of My Life!',
            subtitle: 'I know it\'s not a lot, but I gave it my besttt!'
        },
        {
            type: 'content',
            image: '/images/image4.jpg',
            text: 'For the Two Years we\'ve been together, I\'ve been the happiest I\'ve ever been. I love you so much'
        },
        {
            type: 'content',
            image: '/images/image5.jpg',
            text: 'I love your eyes, your smile, your laugh, your voice, your ears, and most of all, I loveeee❤️❤️your heart!'
        },
        {
            type: 'content',
            image: '/images/image7.jpg',
            text: 'I am sorry I can be an ass at times, But I never intentioned to hurt you in whichever way, My Love 😘😘'
        },
        {
            type: 'content',
            image: '/images/image6.jpg',
            text: '💕💕Thank you so so much for being the amazing person and partner you have been for me.💕💕'
        },
        {
            type: 'content',
            image: '/images/image8.jpg',
            text: 'Our relationship is unique and lovely, incomparable to any other. ✨✨'
        },
        {
            type: 'title',
            title: 'Finally All I can Tell you is again, I know I have not done enough to win you, But trust me as long as you can bear me, I will make sure to work on myself and definitely make you very very happy.',
            subtitle: 'I LOVE YOU SOOO MUCH❤️😘❤️'
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