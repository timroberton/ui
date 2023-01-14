import React from "react";
declare type OpenAlertInputType = {
    title?: string;
    text: string;
    intent?: "danger";
    closeButtonLabel?: string;
};
declare type OpenConfirmInputType = {
    title?: string;
    text: string;
    intent?: "danger";
    confirmButtonLabel?: string;
};
declare type OpenPromptInputType = {
    title?: string;
    text: string;
    initialInputText: string;
    intent?: "danger";
    saveButtonLabel?: string;
};
export declare type AlertContext = {
    openAlert(v: OpenAlertInputType): Promise<void>;
    openConfirm(v: OpenConfirmInputType): Promise<boolean>;
    openPrompt(v: OpenPromptInputType): Promise<string | undefined>;
};
export default function AlertProvider({ children, }: {
    children: React.ReactNode;
}): JSX.Element;
export declare const useAlert: () => AlertContext;
export {};
//# sourceMappingURL=alert.d.ts.map