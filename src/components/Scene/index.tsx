import { useEffect } from "react"

export const Scene = ({ setLoadComplete }: any) => {
    const onLoadComplete = () => {
        setLoadComplete()
    }

    useEffect(() => {
        if( (window as any).firstScene ) {
            return
        } else {
            (window as any).firstScene = true
        }

        /** Initialize the scene */
        const initializeOptions = {} as any;
        initializeOptions.ssao = true;

        const canvas = document.getElementById("render-canvas");

        const brain3DApplication = (window as any).brain3DApplication
        
        brain3DApplication.addEventListener(
            (window as any).EventNames.LOAD_COMPLETE,
            onLoadComplete
        );
        brain3DApplication.initialize(canvas, initializeOptions);
    }, [])

    return (
        <>
            <div className="w-full h-full fixed top-0 left-0 z-10">
                <canvas id="render-canvas" touch-action="none"></canvas>
            </div>
        </>
    )
}

export default Scene