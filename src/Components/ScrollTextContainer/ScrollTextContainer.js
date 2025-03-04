import { useState, useEffect } from "react";
import './ScrollTextContainer.css'


const ScrollTextContainer = ({RighToLeft, scrollPos, scrollText,justifyContentPos}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const viewportWidth = window.innerWidth;
    const scrollPosi = scrollPos

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY + scrollPosi); // Update scroll position on scroll
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosi]);

    // Move the text based on the scroll position relative to viewport width
    const Distance = (scrollPosition / viewportWidth) * 1000; // Adjust 1000 for speed
    const moveDistance = RighToLeft + Distance
        return (
            <div className="scroll-container" style={{justifyContent:`${justifyContentPos}`}}>
                <div className="scroll-text"
                    style={{
                    transform: `translateX(${moveDistance}px)`, // Move text based on scroll position
            }}
        >
            {scrollText}
        </div>
        </div>
    );
};
  
  export default ScrollTextContainer;