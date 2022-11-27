import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { usePagination } from "../../pages/Context";
import { useDisplayText, useWheelEvent } from "../hooks";
import './index.scss';

const Wrapper = styled.div`
    width: 40%;
    margin-left: 55%;

    h2 {
        color: white;
        text-align: left;
        font-size: 2.5rem;
        line-height: 3rem;
        font-weight: 900;
    }
`

export const VideoCarousel = () => {
    const step = useRef<number>(1);
    const navigate = useNavigate()
    const [ nextPage ] = usePagination();
    const displayText = useDisplayText();
    const moveToNextPage = () => {
        if(step.current === 1) {
            displayText('.treats');
            setTimeout(() => {
                step.current = 2;
            }, 1000);
        }
        else if(step.current === 2) {
            displayText('.exercise');
            setTimeout(() => {
                step.current = 3;
            }, 1000);
        } 
        else if(step.current === 3) {
            nextPage();
            navigate('/encourage')
        }
    }

    const addEventListener = useWheelEvent(moveToNextPage);

    const onPlayEnd = () => {
        const swiper = (document.getElementsByClassName('js-swiper-videos')[0] as any).swiper
        swiper.slideNext()
    }

    useEffect(() => {
        const brain3DApplication = (window as any).brain3DApplication
        brain3DApplication.turnOffLight();
        displayText('.intimacy');
        addEventListener();
    }, [])

    return (
        <Wrapper className={`fixed top-0 left-0 z-50 w-screen h-screen flex flex-col justify-center items-center p-6`}>
            <div className="container | relative text-start text-white mt-32">
                <div className="flex items-center mb-16 intimacy opacity-0">
                    <img className="w-32 h-32" src="/assets/images/love.gif" alt = "love" />
                    <div className="ml-6 flex-inital w-64">
                        <h5 className="text-xl pb-3 font-bold" style={{fontSize: "40px"}}>
                            INTIMACY
                        </h5>
                        <p>
                            Physical and romantic intimacy with your partner just isn't as exciting
                        </p>
                    </div>
                </div>
                <div className="flex items-center mb-16 treats opacity-0">
                    <img className="w-32 h-32" src="/assets/images/cake.gif" alt = "cake" />
                    <div className="ml-6 flex-inital" style={{width: "200px"}}>
                        <h5 className="text-xl pb-3 font-bold" style={{fontSize: "40px"}}>
                        TREATS
                        </h5>
                        <p>
                            Your favourite food doesn't leave you feeling quite as satisfied
                        </p>
                    </div>
                </div>
                <div className="flex items-center mb-8 exercise opacity-0">
                    <img className="w-32 h-32" src="/assets/images/sport.gif" alt = "cake" />
                    <div className="ml-6 flex-inital" style={{width: "200px"}}>
                        <h5 className="text-xl pb-3 font-bold" style={{fontSize: "40px"}}>
                            EXERCISE
                        </h5>
                        <p>
                            Rigorous exercise doesn't give you the same level of high that you hope for
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}