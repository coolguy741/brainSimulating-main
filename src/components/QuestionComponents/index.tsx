import { useEffect, useState } from "react";
import { questionInfo } from "../../constants";
import { usePagination } from "../../pages/Context";
import { useDisplayText, useWheelEvent } from "../hooks";
import QuestionComponent from "./component";


export const QuestionComponents = ({ setSubName }: any) => {
    const [ ageValue, setAgeValue ] = useState(72)
    const [ firstSawValue, setFirstSawValue ] = useState(25)
    const [ watchHrsValue, setWatchHrsValue ] = useState(0)
    const [ hardcoreValue, setHardcoreValue ] = useState(-1)
    const [ agitatedValue, setAgitatedValue ] = useState(-1)
    const [ focusedControl, setFocusedControl ] = useState("none") 
    const [nextPage] = usePagination();
    const displayText = useDisplayText();

    const handler = () => {
        nextPage();
        setSubName("result2");
    }

    const addEventListener = useWheelEvent(handler)

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
        displayText();
        addEventListener();
    }, []);

    return (
        <div className="w-full">
            <div className="grid grid-cols-10">
                <div className="col-span-6 flex justify-center -mr-6">
                    <div className="flex items-start text-base">
                        {
                            focusedControl === "none" ? (
                                <></>
                            ) : focusedControl == "firstSaw" ? (
                            <div className="z-20 flex rounded border border-white p-4 text-white max-w-md text-center absolute bottom-20 md:bottom-24 left-[5%] sm:left-[10%] md:left-[12%] xl:left-[18%]">
                                Early exposure to pornography can increase risky sexual behaviour and hypersexuality in adults.
                            </div>
                            ) : focusedControl == "watchHrs" ? (
                            <div className="z-20 flex rounded border border-white p-4 text-white max-w-md text-center absolute bottom-20 md:bottom-24 left-[5%] sm:left-[10%] md:left-[12%] xl:left-[18%]">
                                Daily exposure to porn can lead to dependency and addiction. 
                            </div>
                            ) : focusedControl == "hardcore" ? (
                            <div className="z-20 flex rounded border border-white p-4 text-white max-w-md text-center absolute bottom-20 md:bottom-24 left-[5%] sm:left-[10%] md:left-[12%] xl:left-[18%]">
                                Regularly watching different genres of porn is a sign of porn dependency. 
                            </div>
                            ) : (
                            <div className="z-20 flex rounded border border-white p-4 text-white max-w-md text-center absolute bottom-20 md:bottom-24 left-[5%] sm:left-[10%] md:left-[12%] xl:left-[18%]">
                                Experiencing stress when you avoid porn is a sign of porn dependency.  
                            </div>
                            )
                        }
                    </div>
                </div>
                <div className="col-span-4 mt-32">
                    <div className="z-20 flex flex-col justify-center h-full relative animator opacity-0">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionComponents