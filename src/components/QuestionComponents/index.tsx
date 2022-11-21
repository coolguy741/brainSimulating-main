import { useEffect, useState } from "react"
import styled from "styled-components"
import { questionInfo } from "../../constants"
import { ArrowButton } from "../../theme/components"
import QuestionComponent from "./component"

const Wrapper = styled.div`
    width: 40%;
    height: 100%;
    margin-left: 60%;
`

export const QuestionComponents = ({ setSubName }: any) => {
    const [ ageValue, setAgeValue ] = useState(0)
    const [ firstSawValue, setFirstSawValue ] = useState(0)
    const [ watchHrsValue, setWatchHrsValue ] = useState(0)
    const [ hardcoreValue, setHardcoreValue ] = useState(0)
    const [ agitatedValue, setAgitatedValue ] = useState(0)

    useEffect(() => {
        const brain3DApplication = (window as any).brain3DApplication

        brain3DApplication.question1Sum( ageValue + (questionInfo[0].answer as any).min )
        brain3DApplication.question2Sum( firstSawValue + (questionInfo[1].answer as any).min )
        brain3DApplication.question3Sum( watchHrsValue + (questionInfo[2].answer as any).min )
        brain3DApplication.question4Sum( (hardcoreValue) / ((questionInfo[3].answer as any).length - 1) )
        brain3DApplication.question5Sum( (agitatedValue) / ((questionInfo[4].answer as any).length - 1) )
    }, [ageValue, firstSawValue, watchHrsValue, hardcoreValue, agitatedValue])

    return (
        <Wrapper>
            <div className="z-20 flex flex-col justify-center h-full relative">
                <QuestionComponent
                    info={questionInfo[0]}
                    value={ageValue}
                    setValue={(val: any) => setAgeValue(val)}
                />

                <QuestionComponent
                    info={questionInfo[1]}
                    value={firstSawValue}
                    setValue={(val: any) => setFirstSawValue(val)}
                />

                <QuestionComponent
                    info={questionInfo[2]}
                    value={watchHrsValue}
                    setValue={(val: any) => setWatchHrsValue(val)}
                />

                <QuestionComponent
                    info={questionInfo[3]}
                    value={hardcoreValue}
                    setValue={(val: any) => setHardcoreValue(val)}
                />

                <QuestionComponent
                    info={questionInfo[4]}
                    value={agitatedValue}
                    setValue={(val: any) => setAgitatedValue(val)}
                />

                <div className="ml-4">
                    <ArrowButton className={'mt-4'} onClickCallback={() => setSubName('result1')}>Next</ArrowButton>
                </div>
            </div>
        </Wrapper>
    )
}

export default QuestionComponents