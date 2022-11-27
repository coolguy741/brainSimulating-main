import gsap from "gsap";
import { useRef } from 'react';

const useDisplayText = () => {
    const displayText = (selector = '.animator') => {
        var timeline = gsap.timeline({});
        timeline.to(selector, {opacity:0, y:200, duration: 0});
        timeline.to(selector, {opacity:1, y:0, duration: 1.5});
    }
    return displayText;
}

const useWheelEvent = (handler: () => void ) => {
    const count = useRef(0);

    const handleWheelEvent = () => {
        handler();
    };

    const addEventListener = () => {
        setTimeout(() => {
            window.addEventListener("wheel", (e: any) => {
                handleWheelEvent();
            }, {passive: true});
        }, 2000);
    }

    return addEventListener;
}

export {
    useDisplayText,
    useWheelEvent
};

