"use client"

import StepperItem from "./stepper.item";

interface StepperProps {
    step: number,
    stepLabels: string[]
}

function Stepper(props: StepperProps) {

    return <div className="w-full flex items-center gap-x-4 mt-[50px]">
        <div className="w-full h-[1px] bg-black/10"></div>
        {
            props.stepLabels.map((step, stepIndex) => (<>
                <StepperItem
                    currentStep={props.step}
                    thisStep={stepIndex + 1}
                    label={step}
                />
                <div className="w-full h-[1px] bg-black/10"></div>

            </>))
        }
    </div>;
}

export default Stepper;