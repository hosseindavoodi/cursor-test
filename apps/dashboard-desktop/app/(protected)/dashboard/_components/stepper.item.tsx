import { Check } from "lucide-react";

function StepperItem(props: {
    currentStep: number
    thisStep: number
    label: string
}) {

    const state = props.currentStep === props.thisStep ? 'active' :
        props.currentStep > props.thisStep ? 'done' :
            props.currentStep < props.thisStep ? 'in progress' : ''

    return <div className="flex gap-x-2 min-w-fit items-center justify-center">
        <div className={`w-[31px] h-[31px] flex items-center justify-center rounded-full
            ${props.currentStep === props.thisStep ? 'bg-primary-50' :
                props.currentStep > props.thisStep ? 'bg-[#E9F9EB]' :
                    props.currentStep < props.thisStep ? 'bg-[#EBEDEF]' : ''
            } ${props.currentStep === props.thisStep ? 'text-primary-500' :
                props.currentStep > props.thisStep ? 'text-[#178A29]' :
                    props.currentStep < props.thisStep ? 'text-[#40464F]' : ''
            }`}>
            {props.currentStep > props.thisStep ? <span>
                <Check size={20} />
            </span> : <span>{props.thisStep}</span>}
        </div>
        <p className={`text-[13px] ${props.currentStep === props.thisStep ? 'text-primary-500' :
            props.currentStep > props.thisStep ? 'text-[#178A29]' :
                props.currentStep < props.thisStep ? 'text-[#40464F]' : ''
            }`}>{props.label}</p>
    </div>;
}

export default StepperItem;