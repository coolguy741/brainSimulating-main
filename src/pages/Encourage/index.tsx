import { ArrowDown, ChevronDown } from "react-feather"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Header from "../../components/Header"

const Wrapper = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    background-color: #E4FF00;
`

const IntroWrapper = styled.div`
    position: relative;

    @media(max-width: 1024px) {
        padding: 1rem;
    }
`

const ContentWrapper = styled.div`
    width: 60%;
    margin-left: 5%;

    h1, p {
        font-size: 4.5rem;
        line-height: 5.5rem;
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

export const Encourage = () => {
    return (
        <div>
            <Wrapper className={`w-screen h-screen`}>
                <div className='w-full h-full mx-auto p-6'>
                    <div className='w-full h-full relative'>
                        <Header />
                        
                        <IntroWrapper className={`relative mt-auto mb-auto font-Roboto flex justify-center items-center w-full h-full p-8 z-50`}>
                            <div className="l-container relative w-full">
                                <ContentWrapper>
                                    <h1 className="f-hero font-bold text-black mb-16">Reducing your porn intake could lead to a new lease on life.</h1>

                                    <Link to={'/end'}>
                                        <ChevronDown size={200} fontSize={20} />
                                    </Link>
                                </ContentWrapper>
                            </div>
                        </IntroWrapper>
                    </div>
                </div>
            </Wrapper>
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 z-0 w-auto min-w-full min-h-full max-w-none "
            >
                <source src='/assets/movies/Background6.mov' type="video/mp4"/>
            </video>
        </div>
              
    )
}

export default Encourage