import styled from "styled-components"
import RadioSelect from "../RadioGroup"
import RangeInput from "../RangeInput"

const QuestionSelect = styled.div`
    bottom: 0;
    color: #313131;
    max-width: 640px;
    width: 90%;
`

const QuestionText = styled.div`
    color: #fff;
    font-size: 17px;

    h2 {
        font-weight: 500;
    }
`

const RangeWrapper = styled.div`
    width: 100%;
`

const RadioWrapper = styled.div`
    width: 300px;
`

export const QuestionComponent = ({ info, value, setValue } : any) => {
    return (
        <>
            <QuestionSelect className="text-center flex flex-col justify-center items-start py-2">
                <div className={`flex justify-center items-center ${ info.type === 'number' ? 'mb-6' : 'mb-2' }`}>
                    <QuestionText className="px-4"> <h2>{ info.text }</h2> </QuestionText>
                </div>

                { info.type === 'number' ? (
                    <RangeWrapper className="relative px-4">
                        <RangeInput
                            min={0}
                            max={(info.answer as any).max - (info.answer as any).min}
                            value={value}
                            rangeMin={ (info.answer as any).min }
                            setValue={setValue}
                        />
                    </RangeWrapper>
                ) : (
                    <RadioWrapper>
                        <RadioSelect 
                            plans={ info.answer }
                            selected={value}
                            setSelected={setValue}
                        />
                    </RadioWrapper>
                ) }
            </QuestionSelect>
        </>
    )
}

export default QuestionComponent