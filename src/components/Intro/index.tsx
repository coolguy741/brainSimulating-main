import { Link } from "react-router-dom"
import styled from "styled-components"
import { ArrowButton } from "../../theme/components"

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
    return (
        <IntroWrapper className={`relative mt-auto mb-auto font-Roboto flex justify-center items-center w-full h-full p-8`}>
            <div className="l-container relative w-full">
                <ContentWrapper>
                    <p className="text-5xl leading-[3rem] font-semibold text-black mb-32">Did you know that watching porn changes your brain chemistry?</p>


                    <Link to={'/brain'}>
                        <ArrowButton>Next</ArrowButton>
                    </Link>
                </ContentWrapper>
            </div>
        </IntroWrapper>
    )
}

export default Intro