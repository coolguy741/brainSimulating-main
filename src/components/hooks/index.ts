import gsap from "gsap";
import { useRef } from 'react';

const useDisplayText = () => {
    const displayText = () => {
        var timeline = gsap.timeline({});
        timeline.to('.animator', {opacity:0, y:200, duration: 0});
        timeline.to('.animator', {opacity:1, y:0, duration: 1.5});
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
        }, 3000);
    }

    return addEventListener;
}

export {
    useDisplayText,
    useWheelEvent
};

