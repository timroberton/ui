import React from "react";
import { VariantProps } from "class-variance-authority";
export declare const getClassesForInput: (props?: {
    intent?: "primary" | "secondary" | "success" | "warning" | "error";
    margin?: "left" | "right";
} & import("class-variance-authority/dist/types").ClassProp) => string;
declare type InputProps = React.ComponentPropsWithoutRef<"input"> & VariantProps<typeof getClassesForInput>;
export declare function Input({ className, intent, margin, type, ...props }: InputProps): JSX.Element;
declare type InputWithLabelProps = InputProps & {
    rootId: string;
    label: string;
};
export declare function InputWithLabel({ label, rootId, ...props }: InputWithLabelProps): JSX.Element;
export {};
//# sourceMappingURL=input.d.ts.map