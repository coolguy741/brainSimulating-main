import styled from "styled-components";

export const InputButton = styled.button`
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    :hover {
        cursor: pointer;

        svg {
            stroke: #986db2 !important;
        }
    }

    :disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`

export const NormalButton = styled.button`
    height: 48px;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 4px;
    border: 1px solid transparent;
    transition: color 400ms ease,background-color 400ms ease,border-color 400ms ease,text-decoration-color 400ms ease,fill 400ms ease,stroke 400ms ease,opacity 400ms ease,box-shadow 400ms ease,text-shadow 400ms ease,transform 400ms ease,filter 400ms ease,backdrop-filter 400ms ease;
    color: #313131;
    background-color: #e5ff00b5;
    font-size: 14px;
    letter-spacing: 0.4px;
    line-height: 20px;
    font-weight: 600;

    &:hover {
        background-color: #E5FF00;
    }
`

export const ArrowButton = ({ children, onClickCallback, className } : any) => {
    return (
        <button className={`c-btn font-bold mt-6 | md:mt-12 ${ className }`} onClick={onClickCallback}>
            <span className="block mr-2">{ children }</span>
            <svg fill="currentColor" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round"
                strokeMiterlimit="2" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                    fillRule="nonzero" />
            </svg>
        </button>
    )
}