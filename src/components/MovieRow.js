import React, { useState } from 'react';
import './MovieRow.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let scroll = scrollX + Math.round(window.innerWidth / 2);

        if (scroll > 0) {
            scroll = 0;
        }

        setScrollX(scroll);
    }

    const handleRightArrow = () => {
        let scroll = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 180;

        if (window.innerWidth - listWidth > scroll) {
            scroll = (window.innerWidth - listWidth)  - 60;
        }

        setScrollX(scroll);

    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 180
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className="movieRow--item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}