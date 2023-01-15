"use client";

import { Dialog } from "@headlessui/react";
import React, { createContext, useContext, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

type OpenAlertInput = {
  title?: string;
  text: string;
  intent?: "danger";
  closeButtonLabel?: string;
};

type OpenConfirmInput = {
  title?: string;
  text: string;
  intent?: "danger";
  confirmButtonLabel?: string;
};

type OpenPromptInput = {
  title?: string;
  text: string;
  initialInputText: string;
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

type AlertStateType = OpenAlertInput & {
  stateType: "alert";
  alertResolver(): void;
};

type ConfirmStateType = OpenConfirmInput & {
  stateType: "confirm";
  confirmResolver(v: boolean): void;
};

type PromptStateType = OpenPromptInput & {
  stateType: "prompt";
  promptResolver(v: string | undefined): void;
};

type ComponentStateType<TProps, TReturn> = OpenComponentInput<
  TProps,
  TReturn
> & {
  stateType: "component";
  componentResolver(v: TReturn | undefined): void;
};

export type AlertContext = {
  openAlert(v: OpenAlertInput): Promise<void>;
  openConfirm(v: OpenConfirmInput): Promise<boolean>;
  openPrompt(v: OpenPromptInput): Promise<string | undefined>;
  openComponent<TProps, TReturn>(
    v: OpenComponentInput<TProps, TReturn>
  ): Promise<TReturn | undefined>;
};

//@ts-ignore
const Context = createContext<AlertContext>();

export default function AlertProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [alertState, setAlertState] = useState<
    | AlertStateType
    | ConfirmStateType
    | PromptStateType
    | ComponentStateType<any, any>
    | undefined
  >(undefined);
  const [promptInput, setPromptInput] = useState<string>("");

  async function openAlert(v: OpenAlertInput): Promise<void> {
    return new Promise((resolve: () => void, reject) => {
      setAlertState({
        ...v,
        stateType: "alert",
        alertResolver: resolve,
      });
    });
  }

  async function openConfirm(v: OpenConfirmInput): Promise<boolean> {
    return new Promise<boolean>((resolve: (p: boolean) => void, reject) => {
      setAlertState({
        ...v,
        stateType: "confirm",
        confirmResolver: resolve,
      });
    });
  }

  async function openPrompt(v: OpenPromptInput): Promise<string | undefined> {
    return new Promise<string | undefined>(
      (resolve: (p: string | undefined) => void, reject) => {
        setPromptInput(v.initialInputText);
        setAlertState({
          ...v,
          stateType: "prompt",
          promptResolver: resolve,
        });
      }
    );
  }

  async function openComponent<TProps, TReturn>(
    v: OpenComponentInput<TProps, TReturn>
  ): Promise<TReturn | undefined> {
    return new Promise<TReturn>(
      (resolve: (p: TReturn | undefined) => void, reject) => {
        setAlertState({
          ...v,
          stateType: "component",
          componentResolver: resolve,
        });
      }
    );
  }

  function cancelAny() {
    if (alertState?.stateType === "alert") {
      alertState.alertResolver();
    }
    if (alertState?.stateType === "confirm") {
      alertState.confirmResolver(false);
    }
    if (alertState?.stateType === "prompt") {
      alertState.promptResolver(undefined);
    }
    if (alertState?.stateType === "component") {
      alertState.componentResolver(undefined);
    }
    setAlertState(undefined);
  }

  return (
    <Context.Provider
      value={{ openAlert, openConfirm, openPrompt, openComponent }}
    >
      {children}
      {/* This is from Headless UI docs: https://headlessui.com/react/dialog */}
      <Dialog open={!!alertState} onClose={cancelAny} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-base-100 mx-auto max-w-lg rounded px-10 py-8">
            {alertState?.stateType === "component" ? (
              <alertState.element
                close={(p) => {
                  setAlertState(undefined);
                  alertState.componentResolver(p);
                }}
                {...alertState.elementProps}
              />
            ) : (
              <>
                {alertState?.title && (
                  <Dialog.Title
                    className={`font-700 mb-2 text-lg ${
                      alertState?.intent === "danger" ? "text-error" : ""
                    }`}
                  >
                    {alertState.title}
                  </Dialog.Title>
                )}
                <p className="mb-4">{alertState?.text}</p>
                {alertState?.stateType === "alert" && (
                  <div className="">
                    <Button
                      onClick={() => {
                        setAlertState(undefined);
                        alertState.alertResolver();
                      }}
                      intent={alertState.intent}
                    >
                      {alertState.closeButtonLabel ?? "Close"}
                    </Button>
                  </div>
                )}
                {alertState?.stateType === "confirm" && (
                  <div className="">
                    <Button
                      onClick={() => {
                        setAlertState(undefined);
                        alertState.confirmResolver(true);
                      }}
                      intent={alertState.intent}
                    >
                      {alertState.confirmButtonLabel ?? "Confirm"}
                    </Button>
                    <Button
                      onClick={() => {
                        setAlertState(undefined);
                        alertState.confirmResolver(false);
                      }}
                      intent="neutral"
                      margin="left"
                    >
                      Cancel
                    </Button>
                  </div>
                )}
                {alertState?.stateType === "prompt" && (
                  <>
                    <form id="promptForm" className="">
                      <div className="mb-4 w-96">
                        <Input
                          type="text"
                          value={promptInput}
                          onChange={(v) => setPromptInput(v.target.value)}
                          autoFocus
                        />
                      </div>
                      <div className="">
                        <Button
                          type="submit"
                          form="promptForm"
                          onClick={() => {
                            setAlertState(undefined);
                            alertState.promptResolver(promptInput);
                          }}
                          intent={alertState.intent}
                        >
                          {alertState.saveButtonLabel ?? "Confirm"}
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            setAlertState(undefined);
                            alertState.promptResolver(undefined);
                          }}
                          intent="neutral"
                          margin="left"
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Context.Provider>
  );
}

export const useAlert = () => useContext(Context);
