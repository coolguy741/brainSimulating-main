import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { usePagination } from "../../pages/Context";
import { useDisplayText, useWheelEvent } from "../hooks";

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
    const [scrolling, setScrolling] = useState<boolean>(false);
    const isScrollSet = useRef<boolean>(false);
    const displayText = useDisplayText();
    const [ nextPage ] = usePagination();
    
    const onClickNextButton = () => {
        nextPage();
        setSubName('question')
    }

    const handler = () => {
        if(first) return;
        nextPage();
        setSubName("video");
    }
    const addEventListener = useWheelEvent(handler);

    useEffect(() => {
        const brain3DApplication = (window as any).brain3DApplication
        brain3DApplication.onKeepScrolling = () => {
            if(isScrollSet.current) return;
            isScrollSet.current = true;
            setScrolling(true);
            displayText();
            setTimeout(() => {
                onClickNextButton();
            }, 2000);
        }
        displayText();     
        addEventListener();   
    }, []);
    
    

    return (
        <div className="h-screen | flex flex-col | p-6">
            <Wrapper className="z-10 ml-auto mb-auto mt-24 animator">
                <p className="contentText text-lg font-light leading-8">
                    { first ? (
                        scrolling ? 
                        `Keep scrolling to see what happens to your brain's dopamine rewards system when you watch porn.` : 
                        `This is your brain's dopamine rewards system. It is activated when you experience something you find pleasurable and rewarding.`
                    ) : (
                        `When you regularly watch porn you risk damaging your dopamine rewards system. This means you increase the chances of dampening or even losing the rewarding feeling you get from other normally pleasurable experiences in life.`
                    ) }
                </p>
            </Wrapper>
        </div>
    )
}

export default ResultContent