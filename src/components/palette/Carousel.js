import React, {useState, useEffect} from 'react';
import './Carousel.css';

const Carousel = (props) => {

    const {children} = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [len, setLen] = useState(children.length);

    useEffect(() => {
        setLen(children.length);
    }, [children])

    const right = () => {
        if (currentIndex < (len - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const left = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        
            <div className="carousel-wrapper">
            <button className="left-arrow" onClick={left}>
        &lt;
    </button>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
                <button className="right-arrow" onClick={right}>
        &gt;
    </button>
            </div>
      
    )
}

export default Carousel;