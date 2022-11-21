import { useEffect, useState } from "react"
import { Route, Routes, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { questionInfo } from "../../constants"
import Scene from "../Scene"
import Loader from "../Loader"
import useStore from "../../store"
import ResultContent from "./resultContent"
import Logo from "../Logo"
import Header from "../Header"
import Discover from "../../pages/Discover"
import { VideoCarousel } from "../VideoCarousel"
import QuestionComponents from "../QuestionComponents"
import CSSTransitionGroup from 'react-addons-css-transition-group';


const BackDrop = styled.div`
    background-color: #ef1023;
    background-image: url('/assets/images/Brain background.png');
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
        <Container className={`w-full h-full`}>
            <Header />

            <Scene setLoadComplete={ () => setLoadComplete(true) } />

            { !loadComplete ? (
                <LoaderWrapper className={'h-full | flex flex-col | p-6'}>
                    <BackDrop className="fixed top-0 left-0 w-full h-full z-10" />
                    <Loader />
                </LoaderWrapper>
            ) : (
                <div className="w-full h-full">
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
    )
}

export default Brain