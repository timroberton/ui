/// <reference types="react" />
import { VariantProps } from "class-variance-authority";
export declare const getClassesForSelect: (props?: {
    intent?: "primary" | "secondary" | "success" | "warning" | "error";
    margin?: "left" | "right";
} & import("class-variance-authority/dist/types").ClassProp) => string;
declare type SelectProps<T> = VariantProps<typeof getClassesForSelect> & {
    selected: T;
    options: {
        key: T;
        text: string;
    }[];
    onChange: (v: T) => void;
};
export default function Select(p: SelectProps<string | number>): JSX.Element;
export {};
//# sourceMappingURL=select.d.ts.map