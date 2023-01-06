/// <reference types="react" />
import { VariantProps } from "class-variance-authority";
export declare const getClassesForInput: (props?: {
    intent?: "primary" | "secondary";
    margin?: "left" | "right";
} & import("class-variance-authority/dist/types").ClassProp) => string;
declare type InputProps = React.ComponentPropsWithoutRef<"input"> & VariantProps<typeof getClassesForInput>;
export declare function Input({ className, intent, margin, ...props }: InputProps): JSX.Element;
export {};
//# sourceMappingURL=input.d.ts.map