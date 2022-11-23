import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Header from "../../components/Header"
import { ArrowButton } from "../../theme/components"

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
    const navigate = useNavigate();

    return (
        <div>
            <Wrapper className={`w-screen h-screen`}>
                <div className='w-full h-full mx-auto p-6'>
                    <div className='w-full h-full relative'>
                        <Header />
                        
                        <IntroWrapper className={`relative mt-auto mb-auto font-Roboto flex justify-center items-center w-full h-full p-8 z-50`}>
                            <div className="l-container relative w-full">
                                <ContentWrapper>
                                    <p className="text-5xl leading-[3.5rem] font-bold text-black mb-2">The good news is, studies show that if you stop watching porn, your dopamine rewards system gradually resets to normal levels, so you can start to enjoy life’s pleasures more.</p>
                                    <ArrowButton className={'mt-4'} onClickCallback={() => navigate('/end')}>Next</ArrowButton>
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