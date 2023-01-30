/// <reference types="react" />
import { VariantProps } from "class-variance-authority";
export declare const getClassesForCheckbox: (props?: {
    checked?: boolean;
    intent?: "primary" | "secondary" | "success" | "warning" | "error";
} & import("class-variance-authority/dist/types").ClassProp) => string;
type CheckboxProps = Omit<VariantProps<typeof getClassesForCheckbox>, "checked"> & {
    checked: boolean;
    onChange: (v: boolean) => void;
};
export declare function Checkbox({ intent, checked, onChange }: CheckboxProps): JSX.Element;
type CheckboxWithLabelProps = CheckboxProps & {
    label: string;
    labelOnLeft?: boolean;
};
export declare function CheckboxWithLabel({ intent, checked, onChange, label, labelOnLeft, }: CheckboxWithLabelProps): JSX.Element;
export {};
//# sourceMappingURL=checkbox.d.ts.map