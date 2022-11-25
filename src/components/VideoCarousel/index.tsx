import { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './index.scss'
import RadioSelect from "../RadioGroup";
import { ArrowButton } from "../../theme/components";
import { useNavigate, Link } from "react-router-dom";
import gsap from "gsap";

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
const RotateIcon = styled.div`
    .love-icon {
        transform: rotateY(0deg);
        animation: rotateAnimation1 4s linear infinite;
    }

    .cake-icon {
        transform: rotateY(30deg);
        animation: rotateAnimation2 4s linear infinite;
    }

    .sport-icon {
        transform: rotateY(60deg);
        animation: rotateAnimation3 4s linear infinite;
    }

    @keyframes rotateAnimation1 {
        from {transform: rotateY(0deg);}
        to {transform: rotateY(360deg);}
    }
    
    @keyframes rotateAnimation2 {
        from {transform: rotateY(30deg);}
        to {transform: rotateY(390deg);}
    }
    
    @keyframes rotateAnimation3 {
        from {transform: rotateY(60deg);}
        to {transform: rotateY(420deg);}
    }
`


export const VideoCarousel = () => {
    const navigate = useNavigate()

    const onPlayEnd = () => {
        const swiper = (document.getElementsByClassName('js-swiper-videos')[0] as any).swiper
        swiper.slideNext()
    }

    const moveToNextPage = () => {
        navigate('/encourage')
    }

    useEffect(() => {
        const brain3DApplication = (window as any).brain3DApplication
        brain3DApplication.turnOffLight();
        let tl = gsap.timeline({});
        tl.to(".love-icon", {repeat: -1, duration: 1,  y:360, ease: Power0.easeNone});
    }, [])

    return (
        <Wrapper className={`fixed top-0 left-0 z-50 w-screen h-screen flex flex-col justify-center items-center p-6`}>
            <div className="container | relative text-start text-white mt-32">
                <div className="flex mb-16">
                    <RotateIcon className="flex-none">
                        <img className="love-icon w-24 h-20" src="/assets/images/love.png" alt = "love" />
                    </RotateIcon>
                    <div className="ml-6 flex-inital w-64">
                        <h5 className="text-xl pb-3 font-bold" style={{fontSize: "40px"}}>
                            INTIMACY
                        </h5>
                        <p>
                            Physical and romantic intimacy with your partner just isn't as exciting
                        </p>
                    </div>
                </div>
                <div className="flex mb-16">
                    <RotateIcon className="flex-none">
                        <img className="cake-icon w-24 h-20" src="/assets/images/cake.png" alt = "cake" />
                    </RotateIcon>
                    <div className="ml-6 flex-inital" style={{width: "200px"}}>
                        <h5 className="text-xl pb-3 font-bold" style={{fontSize: "40px"}}>
                        TREATS
                        </h5>
                        <p>
                            Your favourite food doesn't leave you feeling quite as satisfied
                        </p>
                    </div>
                </div>
                <div className="flex mb-8">
                    <RotateIcon className="flex-none">
                        <img className="sport-icon w-24 h-20" src="/assets/images/sport.png" alt = "cake" />
                    </RotateIcon>
                    <div className="ml-6 flex-inital" style={{width: "200px"}}>
                        <h5 className="text-xl pb-3 font-bold" style={{fontSize: "40px"}}>
                            EXERCISE
                        </h5>
                        <p>
                            Rigorous exercise doesn't give you the same level of high that you hope for
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <Link to={'/encourage'}>
                        <ArrowButton>Next</ArrowButton>
                    </Link>
                </div>
            </div>
        </Wrapper>
    )
}