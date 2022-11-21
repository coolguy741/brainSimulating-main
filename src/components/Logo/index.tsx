import styled from "styled-components"

const Wrapper = styled.div`
    .logoWrapper {
        height: 100px;

        img {
            height: 100%;
        }

        &.second {
            height: 120px;
        }
    }
`

export const Logo = () => {
    return (
        <Wrapper className="absolute flex justify-center items-center top-0 left-0 px-8 py-6 z-10">
            <div className="mr-4 logoWrapper">
                <img className="h-full" alt="pic" src={'/assets/images/TPB Logo.svg'}></img>
            </div>

            <div className="logoWrapper second">
                <img className="h-full" alt="pic" src={'/assets/images/FTND Logo.svg'}></img>
            </div>
        </Wrapper>
    )
}

export default Logo