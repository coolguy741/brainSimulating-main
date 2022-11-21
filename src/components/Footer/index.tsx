import styled from "styled-components"
import logoImg from '../../assets/imgs/logo.png'
import brainImg from '../../assets/imgs/brain.png'

const FooterWrapper = styled.div`
    @media (max-width: 768px) {
        justify-content: center;
    }

    .logoDescription {
        border-top: 1px solid #ffffff94;
        line-height: 1.1rem;
    }

    .brainImg {
        transform: rotateY(-180deg);
    }
`

export const Footer = () => {
    return (
        <FooterWrapper className={`flex justify-end items-center absolute bottom-0 w-full flex-wrap`}>
            <div className="w-28 px-4">
                <img className="brainImg w-full" alt="pic" src={brainImg}></img>
            </div>

            <div className="w-24 px-4">
                <img alt="pic" src={logoImg} className="w-full mb-2"></img>

                <p className="logoDescription w-full text-xl text-white font-Utility py-1">FIGHT THE <br/> NEW DRUG</p>
            </div>
        </FooterWrapper>
    )
}

export default Footer