import type { TSteps } from './conts';
import { useState } from 'react';
import { match } from 'ts-pattern';
import CompletePage from './components/CompletePage';
import SelectPage from './components/SelectPage';
import { STEPS } from './conts';

const UploadImagePage = () => {
    const [currentStep, setCurrentStep] = useState<TSteps>(STEPS.SELECT);

    const changeStep = (step: TSteps) => {
        setCurrentStep(step);
    };

    return (
        <main className="flex size-full flex-col items-center justify-center">
            {match(currentStep)
                .with(STEPS.SELECT, () => <SelectPage changeStep={changeStep} />)
                .with(STEPS.COMPLETE, () => <CompletePage changeStep={changeStep} />)
                .exhaustive()}
        </main>
    );
};

export default UploadImagePage;
