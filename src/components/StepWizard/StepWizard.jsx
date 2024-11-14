import React, {useState} from "react";
import Step from "./Steps";

const StepWizard =({steps}) => {
    const [currentStep, setCurrentStep] = useState(0);

    const goToNextStep = () => {
        if(currentStep < steps.length -1)
            setCurrentStep(currentStep+1);
    }

    const goToPreviousStep = () => {
        if(currentStep > 0)
            setCurrentStep(currentStep-1);
    }

    return (
        <div className="step-form">
            <div className="step-bread">
            {steps.map((step,index) => (
                <button type="button" className={index == currentStep?"stepActive": "stepInactive"} disabled={index != currentStep}> 
                    {step.title}
                </button>
            ))} 
            </div>
            <form>
                {steps.map((step,index) => (
                    index===currentStep &&(
                        <Step key={index} stepNumber={index+1} title={step.title}>
                            {step.content}
                        </Step>
                    )
                ))}
            </form>
            <div className="navigation-buttons">
                <button type="button" onClick={goToPreviousStep} disabled={currentStep==0}>
                    Previous
                </button>
                <button type="button" onClick={goToNextStep} disabled={currentStep==steps.length - 1}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default StepWizard;