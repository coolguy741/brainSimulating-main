import { useEffect, useState } from "react"
import { questionInfo } from "../../constants"
import { ArrowButton } from "../../theme/components"
import QuestionComponent from "./component"
import gsap from "gsap";


export const QuestionComponents = ({ setSubName }: any) => {
    const [ ageValue, setAgeValue ] = useState(72)
    const [ firstSawValue, setFirstSawValue ] = useState(25)
    const [ watchHrsValue, setWatchHrsValue ] = useState(0)
    const [ hardcoreValue, setHardcoreValue ] = useState(2)
    const [ agitatedValue, setAgitatedValue ] = useState(0)
    const [ focusedControl, setFocusedControl ] = useState("none") 

    useEffect(() => {
        const brain3DApplication = (window as any).brain3DApplication

        brain3DApplication.question1Sum( ageValue + (questionInfo[0].answer as any).min )
        brain3DApplication.question2Sum( firstSawValue + (questionInfo[1].answer as any).min )
        brain3DApplication.question3Sum( watchHrsValue + (questionInfo[2].answer as any).min )
        brain3DApplication.question4Sum( (hardcoreValue) / ((questionInfo[3].answer as any).length - 1) )
        brain3DApplication.question5Sum( (agitatedValue) / ((questionInfo[4].answer as any).length - 1) )
        brain3DApplication.turnOnLight()

    }, [ageValue, firstSawValue, watchHrsValue, hardcoreValue, agitatedValue])

    useEffect(() => {
        var tl = gsap.timeline({});
       // tl.to('.control-tools', {opacity:0, y:100, duration: 0});
        const brain3DApplication = (window as any).brain3DApplication
        brain3DApplication.onCloseBrain = () => {
            tl.to('.control-tools', {opacity:1, y:-100, duration: 2, delay:2});
        }
    }, []);

    return (
        <div className="w-full">
            <div className="grid grid-cols-10">
                <div className="col-span-6 flex justify-center 2xl:-mb-28 -mr-12">
                    <div className="flex items-end h-full text-base">
                        {
                            focusedControl == "none" ? (
                                <></>
                            ) : focusedControl == "firstSaw" ? (
                            <div className="z-20 flex rounded border border-white p-4 text-white max-w-md text-center">
                                Early exposure to pornography can increase risky sexual behaviour and hypersexuality in adults.
                            </div>
                            ) : focusedControl == "watchHrs" ? (
                            <div className="z-20 flex rounded border border-white p-4 text-white max-w-md text-center">
                                Daily exposure to porn can lead to dependency and addiction. 
                            </div>
                            ) : focusedControl == "hardcore" ? (
                            <div className="z-20 flex rounded border border-white p-4 text-white max-w-md text-center">
                                Regularly watching different genres of porn is a sign of porn dependency. 
                            </div>
                            ) : (
                            <div className="z-20 flex rounded border border-white p-4 text-white max-w-md text-center">
                                Experiencing stress when you avoid porn is a sign of porn dependency.  
                            </div>
                            )
                        }
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="z-20 flex flex-col justify-center h-full relative control-tools opacity-0">
                        <QuestionComponent
                            info={questionInfo[1]}
                            value={firstSawValue}
                            setValue={(val: any) => {setFirstSawValue(val);setFocusedControl("firstSaw"); }}
                            colorful={true}
                            positive={false}
                        />

                        <QuestionComponent
                            info={questionInfo[2]}
                            value={watchHrsValue}
                            setValue={(val: any) => {setWatchHrsValue(val); setFocusedControl("watchHrs"); }}
                            colorful={true}
                        />

                        <QuestionComponent
                            info={questionInfo[3]}
                            value={hardcoreValue}
                            setValue={(val: any) => {setHardcoreValue(val);   setFocusedControl("hardcore"); }}
                        />

                        <QuestionComponent
                            info={questionInfo[4]}
                            value={agitatedValue}
                            setValue={(val: any) => {setAgitatedValue(val); setFocusedControl("agitated");}}
                        />

                        <QuestionComponent
                            info={questionInfo[0]}
                            value={ageValue}
                            setValue={(val: any) => {setAgeValue(val); setFocusedControl("none");}}
                        />

                        <div className="ml-4">
                            <ArrowButton className={'mt-4'} onClickCallback={() => setSubName('result1')}>Next</ArrowButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default QuestionComponents