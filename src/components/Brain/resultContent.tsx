import styled from "styled-components"
import { ArrowButton } from "../../theme/components"

const Wrapper = styled.div`
    width: 35%;
    margin-left: auto;
    padding: 2rem;
    padding-right: 10%;
    margin-right: 10%;

    .contentText {
        color: white;
    }
`

const NormalButton = styled.button`
    height: 48px;
    transition: color 400ms ease,background-color 400ms ease,border-color 400ms ease,text-decoration-color 400ms ease,fill 400ms ease,stroke 400ms ease,opacity 400ms ease,box-shadow 400ms ease,text-shadow 400ms ease,transform 400ms ease,filter 400ms ease,backdrop-filter 400ms ease;
    color: #fff;
    font-size: 1.5rem;
    letter-spacing: 0.4px;
    line-height: 20px;
    font-weight: 400;
    margin-top: 20px;
    
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
            <Wrapper className="z-10 ml-auto mb-auto mt-24">
                <p className="contentText text-lg font-light leading-8">
                    { first ? (
                        'This is a simulation of your brain’s activity when you are watching pornography. The parts lighting up are the dopamine rewards system which are activated when you experience something you find pleasurable and rewarding.'
                    ) : (
                        `When you regularly watch porn for pleasure you run the risk of damaging your dopamine rewards system. This means you increase the chances of dampening or even losing the rewarding feeling you get from other normally pleasurable experiences in life.`
                    ) }
                </p>

                <div className="w-full">
                    <ArrowButton className="flex justify-center items-center" onClickCallback={onClickNextButton}>
                        {first ? "Next" : "Explore"}
                    </ArrowButton>
                </div>
            </Wrapper>
        </div>
    )
}

export default ResultContent