import React from "react";
declare type OpenAlertInput = {
    title?: string;
    text: string;
    intent?: "danger";
    closeButtonLabel?: string;
};
declare type OpenConfirmInput = {
    title?: string;
    text: string;
    intent?: "danger";
    confirmButtonLabel?: string;
};
declare type OpenPromptInput = {
    title?: string;
    text: string;
    initialInputText: string;
    intent?: "danger";
    saveButtonLabel?: string;
};
declare type OpenComponentInput = {
    element: (p: {
        close: (p: any) => void;
    }) => React.ReactElement;
};
export declare type AlertContext = {
    openAlert(v: OpenAlertInput): Promise<void>;
    openConfirm(v: OpenConfirmInput): Promise<boolean>;
    openPrompt(v: OpenPromptInput): Promise<string | undefined>;
    openComponent(v: OpenComponentInput): Promise<any>;
};
export default function AlertProvider({ children, }: {
    children: React.ReactNode;
}): JSX.Element;
export declare const useAlert: () => AlertContext;
export {};
//# sourceMappingURL=alert.d.ts.map