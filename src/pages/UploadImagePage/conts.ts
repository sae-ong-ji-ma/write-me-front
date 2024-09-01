import { TValues } from 'utils/types';

export const STEPS = {
    SELECT: 'select',
    COMPLETE: 'complete',
} as const;
export type TSteps = TValues<typeof STEPS>;
