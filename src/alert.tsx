"use client";

import { Dialog } from "@headlessui/react";
import React, { createContext, useContext, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

type OpenAlertInputType = {
  title?: string;
  text: string;
  intent?: "danger";
  closeButtonLabel?: string;
};

type OpenConfirmInputType = {
  title?: string;
  text: string;
  intent?: "danger";
  confirmButtonLabel?: string;
};

type OpenPromptInputType = {
  title?: string;
  text: string;
  initialInputText: string;
  intent?: "danger";
  saveButtonLabel?: string;
};

type AlertStateType = OpenAlertInputType & {
  stateType: "alert";
  alertResolver(): void;
};

type ConfirmStateType = OpenConfirmInputType & {
  stateType: "confirm";
  confirmResolver(value: boolean): void;
};

type PromptStateType = OpenPromptInputType & {
  stateType: "prompt";
  promptResolver(value: string | undefined): void;
};

export type AlertContext = {
  openAlert(v: OpenAlertInputType): Promise<void>;
  openConfirm(v: OpenConfirmInputType): Promise<boolean>;
  openPrompt(v: OpenPromptInputType): Promise<string | undefined>;
};

//@ts-ignore
const Context = createContext<AlertContext>();

export default function AlertProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [alertState, setAlertState] = useState<
    AlertStateType | ConfirmStateType | PromptStateType | undefined
  >(undefined);
  const [promptInput, setPromptInput] = useState<string>("");

  async function openAlert(v: OpenAlertInputType): Promise<void> {
    return new Promise((resolve: () => void, reject) => {
      setAlertState({
        ...v,
        stateType: "alert",
        alertResolver: resolve,
      });
    });
  }

  async function openConfirm(v: OpenConfirmInputType): Promise<boolean> {
    return new Promise<boolean>((resolve: (p: boolean) => void, reject) => {
      setAlertState({
        ...v,
        stateType: "confirm",
        confirmResolver: resolve,
      });
    });
  }

  async function openPrompt(
    v: OpenPromptInputType
  ): Promise<string | undefined> {
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

  function cancelAny() {
    setAlertState(undefined);
    if (alertState?.stateType === "alert") {
      alertState.alertResolver();
    }
    if (alertState?.stateType === "confirm") {
      alertState.confirmResolver(false);
    }
    if (alertState?.stateType === "prompt") {
      alertState.promptResolver(undefined);
    }
  }

  return (
    <Context.Provider value={{ openAlert, openConfirm, openPrompt }}>
      {children}
      {/* This is from Headless UI docs: https://headlessui.com/react/dialog */}
      <Dialog open={!!alertState} onClose={cancelAny} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-base-100 mx-auto max-w-lg rounded px-10 py-8">
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
          </Dialog.Panel>
        </div>
      </Dialog>
    </Context.Provider>
  );
}

export const useAlert = () => useContext(Context);
