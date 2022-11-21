import { ChevronRight } from "react-feather"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 50%;
    margin-left: auto;
    padding: 2rem;
    padding-right: 10%;

    .contentText {
        font-size: 35px;
        color: white;
    }

    @media( max-width: 1368px ) {
        .contentText {
            font-size: 35px;
        }
    }

    @media( max-width: 1024px ) {
        padding-right: 2rem;

        .contentText {
            font-size: 30px;
        }
    }
`

const NormalButton = styled.button`
    height: 48px;
    transition: color 400ms ease,background-color 400ms ease,border-color 400ms ease,text-decoration-color 400ms ease,fill 400ms ease,stroke 400ms ease,opacity 400ms ease,box-shadow 400ms ease,text-shadow 400ms ease,transform 400ms ease,filter 400ms ease,backdrop-filter 400ms ease;
    color: #fff;
    font-size: 30px;
    letter-spacing: 0.4px;
    line-height: 20px;
    font-weight: 600;
    margin-top: 40px;

    &:hover {
        color: #e5ff00;
    }
`

export const ResultContent = ({ first, setSubName }: any) => {
    const onClickNextButton = () => {
        setSubName( first ? 'result2' : 'discover')
    }

    return (
        <div className="h-screen | flex flex-col | p-6">
            <Wrapper className="z-10 ml-auto mb-auto">
                <p className="contentText text-sm font-medium leading-9">
                    { first ? (
                        'This is a simulation of your brain’s activity when you are watching pornography. The parts lighting up are the dopamine rewards system which are activated when you experience something you find pleasurable and rewarding.'
                    ) : (
                        `Numerous brain studies have shown that the more porn you watch, the more you increase your chances of dampening the rewarding feeling you get from other normally pleasurable experiences.`
                    ) }
                </p>

                <div className="w-full">
                    <NormalButton className="flex justify-center items-center" onClick={onClickNextButton}>
                        TELL ME MORE
                        <ChevronRight size={40} className={'ml-1'} />
                    </NormalButton>
                </div>
            </Wrapper>
        </div>
    )
}

export default ResultContent