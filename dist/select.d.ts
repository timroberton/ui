/// <reference types="react" />
import { VariantProps } from "class-variance-authority";
export declare const getClassesForSelect: (props?: {
    intent?: "primary" | "secondary" | "success" | "warning" | "error";
} & import("class-variance-authority/dist/types").ClassProp) => string;
declare type SelectProps<T> = VariantProps<typeof getClassesForSelect> & {
    selected: T;
    options: {
        key: T;
        text: string;
    }[];
    onChange: (v: T) => void;
    label?: string;
};
export declare function Select<T extends string | number>({ selected, options, onChange, label, intent }: SelectProps<T>): JSX.Element;
export {};
//# sourceMappingURL=select.d.ts.map