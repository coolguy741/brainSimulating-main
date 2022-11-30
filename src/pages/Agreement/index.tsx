import styled from 'styled-components';
import Header from '../../components/Header';
import Intro from '../../components/Intro';

const Wrapper = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    background-color: #FC31DA;
`

export const Agreement = () => {
    return (
        <div className=''>
            <Wrapper className={`w-screen h-screen bg-transparent`}>
                Agreement
            </Wrapper>
        </div>
    )
}

export default Agreement