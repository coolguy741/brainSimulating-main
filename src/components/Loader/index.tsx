import styled from "styled-components"

const LoaderWrapper = styled.div`
    position: absolute;
    transform: translate3d(-50%, -50%, 0);
    top: 25%;
    left: 50%;

    font-size: 60px;
    font-weight: 700;

    height: 100%;

    .intro {
        &-title {
            will-change: color letter-spacing; // Note: not best perf for letter-spacing, just a concept if they like it we can turn text to SVG and animate it. 
            animation: TEXT-LOGO-COLOR 4s ease-in-out infinite;
        }
    
        &-logo {
            max-width: 16rem;
            margin: 0 auto;
            will-change: fill stroke;
            animation: SVG-LOGO-FILL-STROKE 4s ease-in-out infinite;
        }
    }

    h1 {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 45px;

        @media( max-width: 1024px ) {
            font-size: 35px;
        }

        @media( max-width: 768px ) {
            font-size: 30px;
        }
        
        @media( max-width: 564px ) {
            font-size: 25px;
        }
    }
`

export const Loader = () => {
    return (
        <LoaderWrapper className="text-center text-white flex flex-col justify-center z-10">
            <img className="object-contain" alt="pic" src="/assets/images/logo_loading.gif" />

            {/* <h1>how does porn change your brain?</h1> */}
        </LoaderWrapper>
    )
}

export default Loader