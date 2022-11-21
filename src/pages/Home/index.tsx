import styled from 'styled-components'
import Header from '../../components/Header'
import Intro from '../../components/Intro'

const Wrapper = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    background-color: #FC31DA;
`

export const Home = () => {
    return (
        <div className='bg-transparent'>
            <Wrapper className={`w-screen h-screen`}>
                <div className='w-full h-full mx-auto p-6 z-99'>
                    <div className='w-full h-full relative'>
                        <Header />
                        <Intro/>
                    </div>
                </div>
            </Wrapper>
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 z-1 w-auto min-w-full min-h-full max-w-none "
            >
                <source src='/assets/movies/Background6.mov' type="video/mp4"/>
            </video>
        </div>
    )
}

export default Home