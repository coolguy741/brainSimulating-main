import styled from "styled-components"
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const CheckIcon = (props: any) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
}

const Wrapper = styled.div`
    .radioOption {
        font-size: clamp(0.875rem, 0.857rem + 0.09vw, 1rem);
        line-height: 1;
        padding: .35rem 1rem;
        background-color: white;
        border-radius: 2rem;
        transition: background-color 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95), color 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);

        &:hover {
            background-color: black;
            color: #fff !important;
        }

        &.bg-yellow {
            background-color: #e5ff00;
        }

        margin-left: 1rem !important;
        margin-right: 1rem !important;
    }

    .radioLabel {
    }
`

export const RadioSelect = ({ plans, selected, setSelected, alignLeft }: any) => {
    return (
        <Wrapper className="w-full px-4 py-2 pt-0">
            <div className={`${ !alignLeft ? 'mx-auto' : '' } w-full max-w-md`}>
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                    <div className={`space-x-8 flex ${ alignLeft ? 'justify-left' : 'justify-center' } items-center`}>
                        {plans.map((plan: any, index: number) => (
                            <RadioGroup.Option
                                key={`plan${index}`}
                                value={index}
                                className={({ active, checked }) =>
                                    `
                                    ${
                                        checked ? 'bg-yellow text-black' : 'bg-white text-black'
                                    }
                                    relative flex cursor-pointer focus:outline-none radioOption`
                                }
                            >
                            {({ active, checked }) => (
                                <>
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="text-sm">
                                                <RadioGroup.Label
                                                    as="p"
                                                    className={`font-medium radioLabel`}
                                                >
                                                    {plan}
                                                </RadioGroup.Label>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </Wrapper>
    )
}

export default RadioSelect