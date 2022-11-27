import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useDisplayText, useWheelEvent } from "../../components/hooks"
import { usePagination } from "../Context"

const Wrapper = styled.div`

    .l-container {
        width: 65%;
        margin-left: 5%;
    }

    h2 {
        font-size: 5rem;
    }

    button {
        font-size: 1rem !important;
    }
`

export const Discover = ({ setSubName }: any) => {
    const navigate = useNavigate()
    const [nextPage] = usePagination();
    const displayText = useDisplayText();
    const handler = () => {
        nextPage();
        setSubName('video')
    }
    const addEventListener = useWheelEvent(handler);

    useEffect(() => {
        displayText();
        addEventListener();
    }, []); 

    return (
        <Wrapper className={`fixed top-0 left-0 z-50 w-screen h-screen flex flex-col p-6 bg-transparent`}>
            <div className="mt-auto mb-auto">
                <div className="l-container animator">
                    <p className="text-5xl font-medium text-white leading-[4rem] z-50">Did you know that watching porn regularly can affect several areas of your life?</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Discover