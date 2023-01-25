import React from "react";
import { VariantProps } from "class-variance-authority";
export declare const getClassesForButton: (props?: {
    intent?: "primary" | "secondary" | "neutral" | "success" | "warning" | "danger";
    size?: "medium" | "small";
    margin?: "left" | "right";
} & import("class-variance-authority/dist/types").ClassProp) => string;
declare type ButtonProps = React.ComponentPropsWithoutRef<"button"> & VariantProps<typeof getClassesForButton> & {
    children: React.ReactNode;
};
export declare function Button({ className, intent, size, margin, ...props }: ButtonProps): JSX.Element;
export {};
//# sourceMappingURL=button.d.ts.map