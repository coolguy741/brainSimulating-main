import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Header from "../../components/Header"
import Scene from "../../components/Scene"
import { ArrowButton } from "../../theme/components"

const Wrapper = styled.div`
    background-color: #6cefff;

    .l-container {
        width: 65%;
        margin-left: 5%;
    }

    h2 {
        font-size: 5rem;
    }

    button {
        font-size: 2rem !important;
    }
`

export const Discover = ({ setSubName }: any) => {
    const navigate = useNavigate()

    const onClickDiscover = () => {
        setSubName('video')
    }

    return (
        <Wrapper className={`fixed top-0 left-0 z-10 w-screen h-screen flex flex-col p-6`}>
            <div className="mt-auto mb-auto">
                <div className="l-container">
                    <h2 className="f-hero f-hero--xl font-bold text-black mb-6">Did you know that watching porn frequently can other areas of your life?</h2>

                    <ArrowButton onClickCallback={ onClickDiscover }>
                        FIND OUT MORE
                    </ArrowButton>
                </div>
            </div>
        </Wrapper>
    )
}

export default Discover