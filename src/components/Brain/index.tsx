import { gsap } from "gsap"
import { CustomEase } from "gsap/CustomEase"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { usePagination } from "../../pages/Context"
import Header from "../Header"
import Loader from "../Loader"
import QuestionComponents from "../QuestionComponents"
import Scene from "../Scene"
import { VideoCarousel } from "../VideoCarousel"
import ResultContent from "./resultContent"

gsap.registerEffect({
    name: "zoom",
    effect: (targets: any, config: any) => {
      const vars = {transformOrigin: "0px 0px", ...config},
            { scale, origin } = config,
            clamp = gsap.utils.clamp(-100 * (scale - 1), 0);
      delete vars.origin;
      vars.xPercent = clamp((0.5 - origin[0] * scale) * 100);
      vars.yPercent = clamp((0.5 - origin[1] * scale) * 100);
      vars.overwrite = "auto";
      return gsap.to(targets, vars);
    },
    extendTimeline: true,
    defaults: {origin: [0.5, 0.5], scale: 2}
  });

const BackDrop = styled.div`
    // background-color: #ef1023;
    background-image: url('/assets/images/Brain_CU.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const LoaderWrapper = styled.div`
    opacity: 1;
`

const Container = styled.div`
    opacity: 1;

    .example-enter {
        opacity: 0.04;
    }
    .example-enter.example-enter-active {
        opacity: 5;
        transition: opacity 50s ease-in;
    }
    .example-leave {
        opacity: 1;
    }
    .example-leave.example-leave-active {
        opacity: 0.04;
        transition: opacity 50s ease-in;
    }
`

export const Brain = () => {
    const [ nextPage ] = usePagination();
    const [ loadComplete, setLoadComplete ] = useState(false)
    const [ subName, setSubName ] = useState('result1')
    const [delay, setDelay] = useState(0)
    useEffect(() => {
        setTimeout(() => setDelay(11), 7000);
        gsap.effects.zoom(".logo-background", {
            scale: 1.2,
            origin: [0.5, 0.5],
            duration: 0,
            ease: "power1.inOut"
        });

        gsap.effects.zoom(".logo-background", {
            scale: 1.0,
            origin: [0.5, 0.5],
            duration: 5,
            ease: CustomEase.create("custom", "M0,0,C0,0,0.275,0,0.376,0,0.406,0,0.752,1,0.8,1,0.846,1,1,1,1,1"),
        });
        
    }, [])

    return (
        <div>
            <Container className={`w-full h-full bg-transparent z-50`}>
                    {delay >= 10 && loadComplete ? (<Header />) : <></>}
                    <Scene setLoadComplete={ () => { setLoadComplete(true); nextPage(); } } />
                    { !loadComplete || delay < 10 ? (
                        <LoaderWrapper className={'h-full | flex flex-col | p-6'}>
                            <BackDrop className="logo-background fixed top-0 left-0 w-full h-full z-10" />
                            <Loader />
                        </LoaderWrapper>
                    ) : (
                        <div className="w-full h-full mt-0 md:mt-20 lg:mt-32">
                            { subName === 'question' ? (
                                <QuestionComponents setSubName={(val: any) => setSubName(val)} />
                            ) : subName === 'result1' ? (
                                <ResultContent 
                                    setSubName={(val: any) => setSubName(val)}
                                    first={true}
                                />
                            ) : subName === 'result2' ? (
                                <ResultContent 
                                    setSubName={(val: any) => setSubName(val)}
                                    first={false}
                                />
                            ) : subName === 'video' ? (
                                <VideoCarousel />
                            ) : null }
                        </div>
                    ) }
            </Container>
            { subName === 'discover' ? (
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 z-10 w-auto min-w-full min-h-full max-w-none"
                >
                    <source src='/assets/movies/Background6.mov' type="video/mp4"/>
                </video>
            ) : (
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 z-0 w-auto min-w-full min-h-full max-w-none"
                >
                    <source src='/assets/movies/Background6.mov' type="video/mp4"/>
                </video>
            )
            }
        </div>
    )
}

export default Brain