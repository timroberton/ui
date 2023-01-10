"use client";

import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { InputWithLabel } from "./input";

type LoginViewState = "signin" | "register" | "resetpasswordrequest";

export type LoginPageProps =
  | LoginPagePropsSignInRegisterResetPasswordRequest
  | LoginPagePropsResetPasswordForm;

type LoginPagePropsSignInRegisterResetPasswordRequest = {
  type: "login";
  supabaseBrowserClient: SupabaseClient;
  logoLinkElement?: React.ReactElement;
  resetPasswordRedirectUrl: string;
};

type LoginPagePropsResetPasswordForm = {
  type: "resetpasswordform";
  supabaseBrowserClient: SupabaseClient;
  logoLinkElement?: React.ReactElement;
  afterResetPassword: () => void;
};

export function LoginPage(p: LoginPageProps) {
  const [loginViewState, setLoginViewState] =
    useState<LoginViewState>("signin");

  return (
    <main className="flex h-screen w-full items-start justify-center">
      <div className="bg-base-200 text-base-content text-400 min-h-full w-full space-y-4 rounded py-10 px-12 sm:mt-24 sm:min-h-0 sm:w-96">
        {p.logoLinkElement && (
          <div className="w-full text-center">{p.logoLinkElement}</div>
        )}
        {p.type === "resetpasswordform" ? (
          <ResetPasswordForm
            changeLoginViewState={(v) => setLoginViewState(v)}
            supabase={p.supabaseBrowserClient}
            afterResetPassword={p.afterResetPassword}
          />
        ) : (
          <>
            {loginViewState === "signin" && (
              <SignInForm
                changeLoginViewState={(v) => setLoginViewState(v)}
                supabase={p.supabaseBrowserClient}
              />
            )}
            {loginViewState === "register" && (
              <RegisterForm
                changeLoginViewState={(v) => setLoginViewState(v)}
                supabase={p.supabaseBrowserClient}
              />
            )}
            {loginViewState === "resetpasswordrequest" && (
              <ResetPasswordRequest
                changeLoginViewState={(v) => setLoginViewState(v)}
                supabase={p.supabaseBrowserClient}
                resetPasswordRedirectUrl={p.resetPasswordRedirectUrl}
              />
            )}
          </>
        )}
      </div>
    </main>
  );
}

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

type LoginPageFormPropsSignInRegister = {
  changeLoginViewState: (v: LoginViewState) => void;
  supabase: SupabaseClient;
};

function SignInForm(p: LoginPageFormPropsSignInRegister) {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  async function submit(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.preventDefault();
    setLoading(true);
    setErrorMsg("");
    const { data, error } = await p.supabase.auth.signInWithPassword({
      email: email || "timroberton@gmail.com",
      password: password || "eptept",
    });
    if (error || !data.session) {
      setErrorMsg(error?.message ?? "Problem with sign in");
      setLoading(false);
    }
  }

  return (
    <form id="signInForm" className="space-y-4">
      <FormHeader>Sign in to use the app</FormHeader>
      {loading ? (
        <div className="text-center">Signing in...</div>
      ) : (
        <>
          <InputWithLabel
            rootId="email"
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(v) => setEmail(v.target.value)}
            autoFocus
          />
          <InputWithLabel
            rootId="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(v) => setPassword(v.target.value)}
          />
          <Button
            className="w-full"
            type="submit"
            form="signInForm"
            onClick={submit}
          >
            Sign in
          </Button>
          {errorMsg && <div className="text-error text-center">{errorMsg}</div>}
          <div className="space-y-2">
            <SpanButton onClick={() => p.changeLoginViewState("register")}>
              Don't have an account?
            </SpanButton>
            <SpanButton
              onClick={() => p.changeLoginViewState("resetpasswordrequest")}
            >
              Forgot password?
            </SpanButton>
          </div>
        </>
      )}
    </form>
  );
}

function RegisterForm(p: LoginPageFormPropsSignInRegister) {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  async function submit(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.preventDefault();
    setLoading(true);
    setErrorMsg("");
    const { data, error } = await p.supabase.auth.signUp({
      email: email || "timroberton@gmail.com",
      password: password || "eptept",
    });
    if (error || !data.session) {
      setErrorMsg(error?.message ?? "Problem creating an account");
      setLoading(false);
    }
  }

  return (
    <form id="registerForm" className="space-y-4">
      <FormHeader>Create an account to use the app</FormHeader>
      {loading ? (
        <div className="text-center">Creating an account...</div>
      ) : (
        <>
          <InputWithLabel
            rootId="email"
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(v) => setEmail(v.target.value)}
            autoFocus
          />
          <InputWithLabel
            rootId="password"
            label="Password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(v) => setPassword(v.target.value)}
          />
          <InputWithLabel
            rootId="firstName"
            label="First name"
            type="text"
            autoComplete="given-name"
            value={firstName}
            onChange={(v) => setFirstName(v.target.value)}
          />
          <InputWithLabel
            rootId="lastName"
            label="Last name"
            type="text"
            autoComplete="family-name"
            value={lastName}
            onChange={(v) => setLastName(v.target.value)}
          />
          <Button
            className="w-full"
            type="submit"
            form="registerForm"
            onClick={submit}
          >
            Create account
          </Button>
          {errorMsg && <div className="text-error text-center">{errorMsg}</div>}
          <SpanButton onClick={() => p.changeLoginViewState("signin")}>
            Already have an account?
          </SpanButton>
        </>
      )}
    </form>
  );
}

type LoginPageFormPropsResetPasswordRequest = {
  changeLoginViewState: (v: LoginViewState) => void;
  supabase: SupabaseClient;
  resetPasswordRedirectUrl: string;
};

type ResetPasswordRequestViewState =
  | "userentry"
  | "sending"
  | "finishedsending";

function ResetPasswordRequest(p: LoginPageFormPropsResetPasswordRequest) {
  const [rprViewState, setRprViewState] =
    useState<ResetPasswordRequestViewState>("userentry");
  const [email, setEmail] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  async function submit(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.preventDefault();
    setRprViewState("sending");
    setErrorMsg("");
    const { error } = await p.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: p.resetPasswordRedirectUrl,
    });
    if (error) {
      setRprViewState("userentry");
      setErrorMsg(error?.message ?? "Problem sending email");
      return;
    }
    setRprViewState("finishedsending");
  }

  return (
    <form id="resetPasswordRequestForm" className="space-y-4">
      <FormHeader>Reset your password</FormHeader>
      {rprViewState === "finishedsending" ? (
        <div className="text-center">
          Email sent! Check your email for a link to reset your password.
        </div>
      ) : rprViewState === "sending" ? (
        <div className="text-center">Sending email...</div>
      ) : (
        <>
          <div className="text-base-content-lighter text-sm">
            Send a link to your email account, which you can use to reset your
            password.
          </div>
          <InputWithLabel
            rootId="email"
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(v) => setEmail(v.target.value)}
            autoFocus
          />
          <Button
            className="w-full"
            onClick={submit}
            type="submit"
            form="resetPasswordRequestForm"
          >
            Send email
          </Button>
          {errorMsg && <div className="text-error text-center">{errorMsg}</div>}
          <SpanButton onClick={() => p.changeLoginViewState("signin")}>
            Remember your password?
          </SpanButton>
        </>
      )}
    </form>
  );
}

type LoginPageFormPropsRequestPasswordForm = {
  changeLoginViewState: (v: LoginViewState) => void;
  supabase: SupabaseClient;
  afterResetPassword: () => void;
};

function ResetPasswordForm(p: LoginPageFormPropsRequestPasswordForm) {
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [linkErrorMsg, setLinkErrorMsg] = useState<string>("");
  const [userErrorMsg, setUserErrorMsg] = useState<string>("");

  useEffect(() => {
    // Try to get error message from url (i.e. from supabase)
    const hashParams = getHashParams();
    if (hashParams["error_description"]) {
      setLinkErrorMsg(hashParams["error_description"]);
    }
  }, []);

  async function submit(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.preventDefault();
    // Try to get error message from url (i.e. from supabase)
    const hashParams = getHashParams();
    if (hashParams["error_description"]) {
      setLinkErrorMsg(hashParams["error_description"]);
      return;
    }
    setLoading(true);
    setUserErrorMsg("");
    const { error } = await p.supabase.auth.updateUser({
      password: password,
    });
    if (error) {
      if (error?.message === "Auth session missing!") {
        setLinkErrorMsg("Email link is invalid or has expired");
        return;
      }
      setUserErrorMsg(error?.message ?? "Problem resetting password");
      setLoading(false);
      return;
    }
    p.afterResetPassword();
  }

  return (
    <form id="resetPasswordForm" className="space-y-4">
      {linkErrorMsg ? (
        <div className="text-error text-center">{linkErrorMsg}</div>
      ) : (
        <>
          <FormHeader>Enter a new password here</FormHeader>
          {loading ? (
            <div className="text-center">Resetting password...</div>
          ) : (
            <>
              <InputWithLabel
                rootId="newPassword"
                label="New password"
                type={"password"}
                autoComplete="new-password"
                value={password}
                onChange={(v) => setPassword(v.target.value)}
                autoFocus
              />
              <Button
                className="w-full"
                onClick={submit}
                type="submit"
                form="resetPasswordForm"
              >
                Save
              </Button>
              {userErrorMsg && (
                <div className="text-error text-center">{userErrorMsg}</div>
              )}
            </>
          )}
        </>
      )}
    </form>
  );
}

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

function getHashParams(): Record<string, string> {
  if (typeof window === "undefined") {
    return {};
  }
  return window.location.hash
    .substring(1)
    .split("&")
    .map((a) => a.split("="))
    .reduce<Record<string, string>>((params, val) => {
      if (val[0] && val[1]) {
        params[val[0]] = val[1].replaceAll("+", " ");
      }
      return params;
    }, {});
}

function SpanButton(p: { onClick: () => void; children: React.ReactNode }) {
  return (
    <div className="text-center">
      <span
        className="text-base-content-lighter cursor-pointer text-sm hover:underline"
        onClick={p.onClick}
      >
        {p.children}
      </span>
    </div>
  );
}

function FormHeader(p: { children: React.ReactNode }) {
  return (
    <div className="font-700 text-primary text-center text-lg">
      {p.children}
    </div>
  );
}
