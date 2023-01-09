"use client";

import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

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
    <main className="flex h-screen w-screen items-start justify-center">
      <div className="bg-base-200 mt-24 rounded py-10 px-12">
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
      setLoading(false);
      setErrorMsg(error?.message ?? "Problem with sign in");
    }
    console.log(data, error);
  }

  return (
    <form id="signInForm" className="w-96">
      <div className="font-700 text-primary mt-4 text-center text-lg">
        Sign in to use the app
      </div>
      <div className="mt-4 mb-1 text-sm">Email</div>
      <Input
        type="email"
        value={email}
        onChange={(v) => setEmail(v.target.value)}
        autoFocus
      />
      <div className="mt-3 mb-1 text-sm">Password</div>
      <Input
        type={"password"}
        value={password}
        onChange={(v) => setPassword(v.target.value)}
      />
      <div className="mt-4">
        <Button
          className="w-full"
          onClick={submit}
          type="submit"
          form="signInForm"
        >
          Sign in
        </Button>
      </div>
      <div className="mt-4 text-center">
        <span
          className="cursor-pointer hover:underline"
          onClick={() => p.changeLoginViewState("register")}
        >
          Don't have an account?
        </span>
      </div>
      <div className="mt-4 text-center">
        <span
          className="cursor-pointer hover:underline"
          onClick={() => p.changeLoginViewState("resetpasswordrequest")}
        >
          Forgot password?
        </span>
      </div>
      {loading && <div className="mt-4 text-center">Signing in...</div>}
      {errorMsg && (
        <div className="text-error mt-4 text-center">{errorMsg}</div>
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
      setLoading(false);
      setErrorMsg(error?.message ?? "Problem with sign in");
    }
    console.log(data, error);
  }

  return (
    <form id="registerForm" className="w-96">
      <div className="font-700 text-primary mt-4 text-center text-lg">
        Create an account for the app
      </div>
      <div className="mt-4 mb-1 text-sm">Email</div>
      <Input
        type="email"
        value={email}
        onChange={(v) => setEmail(v.target.value)}
        autoFocus
      />
      <div className="mt-3 mb-1 text-sm">Password</div>
      <Input
        type={"password"}
        value={password}
        onChange={(v) => setPassword(v.target.value)}
      />
      <div className="mt-3 mb-1 text-sm">First name</div>
      <Input
        type="text"
        value={firstName}
        onChange={(v) => setFirstName(v.target.value)}
      />
      <div className="mt-3 mb-1 text-sm">Last name</div>
      <Input
        type="text"
        value={lastName}
        onChange={(v) => setLastName(v.target.value)}
      />
      <div className="mt-4">
        <Button
          className="w-full"
          onClick={submit}
          type="submit"
          form="registerForm"
        >
          Register
        </Button>
      </div>
      <div className="mt-4 text-center">
        <span
          className="cursor-pointer hover:underline"
          onClick={() => p.changeLoginViewState("signin")}
        >
          Already have an account?
        </span>
      </div>
      {loading && <div className="mt-4 text-center">Signing in...</div>}
      {errorMsg && (
        <div className="text-error mt-4 text-center">{errorMsg}</div>
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
  const [loading, setLoading] =
    useState<ResetPasswordRequestViewState>("userentry");
  const [email, setEmail] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  async function submit(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.preventDefault();
    setLoading("sending");
    setErrorMsg("");
    const { data, error } = await p.supabase.auth.resetPasswordForEmail(
      email || "timroberton@gmail.com",
      {
        redirectTo: p.resetPasswordRedirectUrl,
      }
    );
    if (error) {
      setLoading("userentry");
      setErrorMsg(
        error?.message ?? "Problem with sending reset password email"
      );
      return;
    }
    setLoading("finishedsending");
  }

  return (
    <form id="resetPasswordRequestForm" className="w-96">
      {(loading === "userentry" || loading === "sending") && (
        <>
          <div className="font-700 text-primary mt-4 text-center text-lg">
            Reset your password
          </div>
          <div className="mt-4 mb-1 text-sm">Email</div>
          <Input
            type="email"
            value={email}
            onChange={(v) => setEmail(v.target.value)}
            autoFocus
          />
          <div className="mt-4">
            <Button
              className="w-full"
              onClick={submit}
              type="submit"
              form="resetPasswordRequestForm"
            >
              Send email with link
            </Button>
          </div>
          <div className="mt-4 text-center">
            <span
              className="cursor-pointer hover:underline"
              onClick={() => p.changeLoginViewState("signin")}
            >
              Remember your password?
            </span>
          </div>
          {loading === "sending" && (
            <div className="mt-4 text-center">Sending email...</div>
          )}
          {errorMsg && (
            <div className="text-error mt-4 text-center">{errorMsg}</div>
          )}
        </>
      )}
      {loading === "finishedsending" && (
        <div className="mt-4 text-center">
          Email sent! Check your email for a link to reset your password.
        </div>
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
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const hashParams = getHashParams();
    if (hashParams["error_description"]) {
      setErrorMsg(hashParams["error_description"]);
    }
  }, []);

  async function submit(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.preventDefault();
    setLoading(true);
    setErrorMsg("");
    const { data, error } = await p.supabase.auth.updateUser({
      password: password || "eptept",
    });
    if (error) {
      const hashParams = getHashParams(); // Try to get error message from url (i.e. from supabase)
      setLoading(false);
      setErrorMsg(
        hashParams["error_description"] ??
          error?.message ??
          "Problem with updating password"
      );
      return;
    }
    p.afterResetPassword();
  }

  return (
    <form id="resetPasswordForm" className="w-96">
      {errorMsg ? (
        <div className="text-error mt-4 text-center">{errorMsg}</div>
      ) : (
        <>
          <div className="font-700 text-primary mt-4 text-center text-lg">
            Enter a new password here
          </div>
          <div className="mt-4 mb-1 text-sm">New password</div>
          <Input
            type={"password"}
            value={password}
            onChange={(v) => setPassword(v.target.value)}
            autoFocus
          />
          <div className="mt-4">
            <Button
              className="w-full"
              onClick={submit}
              type="submit"
              form="resetPasswordForm"
            >
              Save
            </Button>
          </div>
          {loading && (
            <div className="mt-4 text-center">Resetting password...</div>
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
