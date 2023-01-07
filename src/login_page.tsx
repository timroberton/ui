"use client";

import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

type LoginViewState = "signin" | "register" | "resetpassword";

export type LoginPageProps = {
  supabase: SupabaseClient;
  logoLinkElement?: React.ReactElement;
};

export function LoginPage(p) {
  const [loginViewState, setLoginViewState] =
    useState<LoginViewState>("signin");

  return (
    <main className="grid h-screen w-screen place-items-center">
      <div className="">
        {p.logoLinkElement && (
          <div className="w-full text-center">{p.logoLinkElement}</div>
        )}
        {loginViewState === "signin" && (
          <SignInForm
            changeLoginViewState={(v) => setLoginViewState(v)}
            supabase={p.supabase}
          />
        )}
        {loginViewState === "register" && (
          <RegisterForm
            changeLoginViewState={(v) => setLoginViewState(v)}
            supabase={p.supabase}
          />
        )}
        {loginViewState === "resetpassword" && (
          <ResetPasswordForm
            changeLoginViewState={(v) => setLoginViewState(v)}
            supabase={p.supabase}
          />
        )}
      </div>
    </main>
  );
}

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

type LoginPageFormProps = {
  changeLoginViewState: (v: LoginViewState) => void;
  supabase: SupabaseClient;
};

function SignInForm(p: LoginPageFormProps) {
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
    <form id="signInForm" className="w-96 pb-32">
      <div className="mt-4 text-center text-lg font-700 text-primary">
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
        <span onClick={() => p.changeLoginViewState("register")}>
          Don't have an account?
        </span>
      </div>
      <div className="mt-4 text-center">
        <span onClick={() => p.changeLoginViewState("resetpassword")}>
          Forgot password?
        </span>
      </div>
      {loading && <div className="">Signing in...</div>}
      {errorMsg && <div className="text-error">{errorMsg}</div>}
    </form>
  );
}

function RegisterForm(p: LoginPageFormProps) {
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
    <form id="registerForm" className="w-96 pb-32">
      <div className="mt-4 text-center text-lg font-700 text-primary">
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
        <span onClick={() => p.changeLoginViewState("signin")}>
          Already have an account?
        </span>
      </div>
      {loading && <div className="">Signing in...</div>}
      {errorMsg && <div className="text-error">{errorMsg}</div>}
    </form>
  );
}

function ResetPasswordForm(p: LoginPageFormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  async function submit(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.preventDefault();
    setLoading(true);
    setErrorMsg("");
    const { data, error } = await p.supabase.auth.resetPasswordForEmail(
      email || "timroberton@gmail.com"
    );
    if (error) {
      setLoading(false);
      setErrorMsg(error?.message ?? "Problem with password reset");
    }
    console.log(data, error);
  }

  return (
    <form id="resetPasswordForm" className="w-96 pb-32">
      <div className="mt-4 text-center text-lg font-700 text-primary">
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
        <Button onClick={submit} type="submit" form="resetPasswordForm">
          Send email with link
        </Button>
        <Button onClick={() => p.changeLoginViewState("signin")}>
          Sign in
        </Button>
      </div>
      {loading && <div className="">Signing in...</div>}
      {errorMsg && <div className="text-error">{errorMsg}</div>}
    </form>
  );
}
