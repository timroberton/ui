import React from "react";
type OpenAlertInput = {
    title?: string;
    text: string;
    intent?: "danger";
    closeButtonLabel?: string;
};
type OpenConfirmInput = {
    title?: string;
    text: string | JSX.Element;
    intent?: "danger";
    confirmButtonLabel?: string;
};
type OpenPromptInput = {
    initialInputText: string;
    title?: string;
    text?: string;
    inputLabel?: string;
    inputType?: React.ComponentPropsWithoutRef<"input">["type"];
    intent?: "danger";
    saveButtonLabel?: string;
};
export type AlertComponentProps<TProps, TReturn> = TProps & {
    close: (p: TReturn | undefined) => void;
};
type OpenComponentInput<TProps, TReturn> = {
    elementProps: TProps;
    element: (p: AlertComponentProps<TProps, TReturn>) => React.ReactElement;
};
export type AlertContext = {
    openAlert(v: OpenAlertInput): Promise<void>;
    openConfirm(v: OpenConfirmInput): Promise<boolean>;
    openPrompt(v: OpenPromptInput): Promise<string | undefined>;
    openComponent<TProps, TReturn>(v: OpenComponentInput<TProps, TReturn>): Promise<TReturn | undefined>;
};
export default function AlertProvider({ children, }: {
    children: React.ReactNode;
}): JSX.Element;
export declare const useAlert: () => AlertContext;
export {};
//# sourceMappingURL=alert.d.ts.map