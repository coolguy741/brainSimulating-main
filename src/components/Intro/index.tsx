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

    h1, p {
        font-size: 3.5rem;
    }

    @media(max-width: 1024px) {
        width: 100%;

        h1, p {
            font-size: 2.5rem;
        }
    }

    @media(max-width: 768px) {
        h1, p {
            font-size: 1.5rem;
        }
    }
`

export const Intro = () => {
    return (
        <IntroWrapper className={`relative mt-auto mb-auto font-Roboto flex justify-center items-center w-full h-full p-8`}>
            <div className="l-container relative w-full">
                <ContentWrapper>
                    <h1 className="f-hero font-bold text-black mb-12">Did you know that watching porn changes your brain chemistry?</h1>

                    <p className="f-hero font-medium text-white">
                        We’re about to simulate your very own brain so you can see how porn could be personally affecting you.
                    </p>

                    <Link to={'/brain'}>
                        <ArrowButton>Next</ArrowButton>
                    </Link>
                </ContentWrapper>
            </div>
        </IntroWrapper>
    )
}

export default Intro