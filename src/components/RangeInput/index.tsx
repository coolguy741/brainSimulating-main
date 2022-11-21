import { getTrackBackground, Range } from "react-range";
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 350px;

    &.disable {
        pointer-events: none;
        opacity: 0.5;
        display: none;
    }

    .thumbValue {
        position: absolute;
        border-radius: 4px;
        left: 50%;
        transform: translate3d(-50%, -160%, 0);
        top: 1rem;
        font-size: 15px;
    }
`

const MinMaxWrapper = styled.div`
    font-size: 15px;

    .min {
        transform: translate3d(-50%, 0, 0);
    }

    .max {
        transform: translate3d(50%, 0, 0);
    }
`

const initialColor = {
    R: 229,
    G: 255,
    B: 0
};

const targetColor = {
    R: 255,
    G: 0,
    B: 0
}

export const RangeInput = ( { min, max, rangeMin, value, setValue, step = 1, disable = false, colorful = false }: any ) => {
    const getColor = (value: number) => {
        let percent = (value - min) / (max - min);
        if(!colorful) percent = 0;
        const color = {
            R: initialColor.R + (targetColor.R - initialColor.R) * percent,
            G: initialColor.G + (targetColor.G - initialColor.G) * percent,
            B: initialColor.B + (targetColor.B - initialColor.B) * percent
        };
        const rgb = `rgb(${color.R},${color.G},${color.B}`;
        return rgb;
    }

    return (
        <Wrapper className={ disable ? 'disable' : '' }>
            <Range
                values={[value]}
                step={step}
                min={min}
                max={max}
                onChange={(val) => setValue(val[0])}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: "22px",
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: "0.15rem",
                                width: "100%",
                                borderRadius: "4px",
                                background: getTrackBackground({
                                    values: [value],
                                    colors: ["#e5ff00", "#e5ff00"],
                                    min: min,
                                    max: max
                                }),
                                alignSelf: "center"
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "20px",
                            width: "20px",
                            borderRadius: "100vw",
                            backgroundColor: getColor(value),
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // boxShadow: "0px 2px 6px #AAA",
                            outline: 'unset',
                        }}
                    >
                        <span style={{color: getColor(value)}} className='thumbValue'>{value + rangeMin}</span>
                    </div>
                )}
            />
        </Wrapper>
    )
}

export default RangeInput