import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { usePagination } from "../../pages/Context"
import { useDisplayText, useWheelEvent } from "../hooks"

const IntroWrapper = styled.div`
    position: relative;

    @media(max-width: 1024px) {
        padding: 1rem;
    }
`

const ContentWrapper = styled.div`
    width: 75%;
`

export const Intro = () => {
    const navigate = useNavigate();
    const [ nextPage ] = usePagination();
    const handler = () => {
        nextPage();
        navigate('/brain');
    }

    const displayText = useDisplayText();
    const addEventListener = useWheelEvent(handler);

    useEffect(() => {
        displayText();
        addEventListener();
    }, []);

    return (
        <IntroWrapper className={`relative mt-auto mb-auto font-Roboto flex justify-center items-center w-full h-full p-8`}>
            <div className="l-container relative w-full">
                <ContentWrapper className="animator">
                    <p className="text-5xl leading-[3rem] font-semibold text-black mb-32">Did you know that watching porn changes your brain chemistry?</p>
                </ContentWrapper>
            </div>
        </IntroWrapper>
    )
}

export default Intro