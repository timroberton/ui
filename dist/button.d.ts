import React from "react";
import { VariantProps } from "class-variance-authority";
export declare const getClassesForButton: (props?: {
    intent?: "primary" | "secondary";
    size?: "medium" | "small";
    margin?: "left" | "right";
    showFocusedState?: boolean;
} & import("class-variance-authority/dist/types").ClassProp) => string;
declare type ButtonProps = React.ComponentPropsWithoutRef<"button"> & VariantProps<typeof getClassesForButton> & {
    children: React.ReactNode;
};
export declare function Button({ className, intent, size, margin, showFocusedState, ...props }: ButtonProps): JSX.Element;
export {};
//# sourceMappingURL=button.d.ts.map