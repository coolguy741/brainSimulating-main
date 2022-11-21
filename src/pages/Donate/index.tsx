import { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "../../components/Header"
import { ArrowButton } from "../../theme/components"

const Wrapper = styled.div`
    --tw-bg-opacity: 1;
    background-color: rgb(226 232 240 / var(--tw-bg-opacity));
`

export const Donate = () => {

    return (
        <Wrapper className={`w-screen h-screen p-6`}>
            <div className="w-full h-full relative">
                <Header />

                <div className="flex flex-col h-full">
                    <div className="mt-auto mb-auto">
                        <div className="l-container | relative">
                            <h2 className="f-hero f-hero--xl font-bold mb-6">Donate your brain<sup>*</sup> to help research into pornography <span className="f-underline-1 font-bold">addiction</span></h2>
                            <small className="block">* DISCLAIMER: xxxxxxxxxx</small>
                            <ArrowButton>
                                Discover your brain
                            </ArrowButton>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Donate