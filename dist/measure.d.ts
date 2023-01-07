import React from "react";
export declare type MeasureContext = {
    measureWrappingTextNoPadding(text: string, maxWidth: number, fs: number, lh: number, fw: number): Promise<{
        w: number;
        h: number;
    }>;
};
export declare function MeasureProvider({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare const useMeasure: () => MeasureContext;
//# sourceMappingURL=measure.d.ts.map