import React from "react";
export type MeasureContext = {
    measureWrappingTextNoPadding(text: string, maxWidth: number, fs: number, lh: number, fw: number): Promise<{
        w: number;
        h: number;
    }>;
};
export default function MeasureProvider({ children, }: {
    children: React.ReactNode;
}): JSX.Element;
export declare const useMeasure: () => MeasureContext;
//# sourceMappingURL=measure.d.ts.map