import { useState } from "react"
import styled from "styled-components"
import Discover from "../../pages/Discover"
import Header from "../Header"
import Loader from "../Loader"
import QuestionComponents from "../QuestionComponents"
import Scene from "../Scene"
import { VideoCarousel } from "../VideoCarousel"
import ResultContent from "./resultContent"


const BackDrop = styled.div`
    background-color: #ef1023;
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
    const [ loadComplete, setLoadComplete ] = useState(false)

    const [ subName, setSubName ] = useState('question')

    return (
        <div>
            <Container className={`w-full h-full bg-transparent z-50`}>
                    {loadComplete ? (<Header />) : <></>}
                    
                    <Scene setLoadComplete={ () => setLoadComplete(true) } />

                    { !loadComplete ? (
                        <LoaderWrapper className={'h-full | flex flex-col | p-6'}>
                            <BackDrop className="fixed top-0 left-0 w-full h-full z-10" />
                            <Loader />
                        </LoaderWrapper>
                    ) : (
                        <div className="w-full h-full mt-12">
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
                            ) : subName === 'discover' ? (
                                <Discover setSubName={(val: any) => setSubName(val)} />
                            ) : subName === 'video' ? (
                                <VideoCarousel />
                            ) : null }
                        </div>
                    ) }
            </Container>
            { subName === 'discover' || subName === 'video'  ? (
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