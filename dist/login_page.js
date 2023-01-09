"use client";
import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
export function LoginPage(p) {
    var _a = useState("signin"), loginViewState = _a[0], setLoginViewState = _a[1];
    return (_jsx("main", __assign({ className: "flex h-screen w-screen items-start justify-center" }, { children: _jsxs("div", __assign({ className: "bg-base-200 mt-24 rounded py-10 px-12" }, { children: [p.logoLinkElement && (_jsx("div", __assign({ className: "w-full text-center" }, { children: p.logoLinkElement }), void 0)), p.type === "resetpasswordform" ? (_jsx(ResetPasswordForm, { changeLoginViewState: function (v) { return setLoginViewState(v); }, supabase: p.supabaseBrowserClient, afterResetPassword: p.afterResetPassword }, void 0)) : (_jsxs(_Fragment, { children: [loginViewState === "signin" && (_jsx(SignInForm, { changeLoginViewState: function (v) { return setLoginViewState(v); }, supabase: p.supabaseBrowserClient }, void 0)), loginViewState === "register" && (_jsx(RegisterForm, { changeLoginViewState: function (v) { return setLoginViewState(v); }, supabase: p.supabaseBrowserClient }, void 0)), loginViewState === "resetpasswordrequest" && (_jsx(ResetPasswordRequest, { changeLoginViewState: function (v) { return setLoginViewState(v); }, supabase: p.supabaseBrowserClient, resetPasswordRedirectUrl: p.resetPasswordRedirectUrl }, void 0))] }, void 0))] }), void 0) }), void 0));
}
function SignInForm(p) {
    var _a = useState(false), loading = _a[0], setLoading = _a[1];
    var _b = useState(""), email = _b[0], setEmail = _b[1];
    var _c = useState(""), password = _c[0], setPassword = _c[1];
    var _d = useState(""), errorMsg = _d[0], setErrorMsg = _d[1];
    function submit(evt) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        evt.preventDefault();
                        setLoading(true);
                        setErrorMsg("");
                        return [4 /*yield*/, p.supabase.auth.signInWithPassword({
                                email: email || "timroberton@gmail.com",
                                password: password || "eptept",
                            })];
                    case 1:
                        _b = _c.sent(), data = _b.data, error = _b.error;
                        if (error || !data.session) {
                            setLoading(false);
                            setErrorMsg((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Problem with sign in");
                        }
                        console.log(data, error);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs("form", __assign({ id: "signInForm", className: "w-96" }, { children: [_jsx("div", __assign({ className: "font-700 text-primary mt-4 text-center text-lg" }, { children: "Sign in to use the app" }), void 0), _jsx("div", __assign({ className: "mt-4 mb-1 text-sm" }, { children: "Email" }), void 0), _jsx(Input, { type: "email", value: email, onChange: function (v) { return setEmail(v.target.value); }, autoFocus: true }, void 0), _jsx("div", __assign({ className: "mt-3 mb-1 text-sm" }, { children: "Password" }), void 0), _jsx(Input, { type: "password", value: password, onChange: function (v) { return setPassword(v.target.value); } }, void 0), _jsx("div", __assign({ className: "mt-4" }, { children: _jsx(Button, __assign({ className: "w-full", onClick: submit, type: "submit", form: "signInForm" }, { children: "Sign in" }), void 0) }), void 0), _jsx("div", __assign({ className: "mt-4 text-center" }, { children: _jsx("span", __assign({ className: "cursor-pointer hover:underline", onClick: function () { return p.changeLoginViewState("register"); } }, { children: "Don't have an account?" }), void 0) }), void 0), _jsx("div", __assign({ className: "mt-4 text-center" }, { children: _jsx("span", __assign({ className: "cursor-pointer hover:underline", onClick: function () { return p.changeLoginViewState("resetpasswordrequest"); } }, { children: "Forgot password?" }), void 0) }), void 0), loading && _jsx("div", __assign({ className: "mt-4 text-center" }, { children: "Signing in..." }), void 0), errorMsg && (_jsx("div", __assign({ className: "text-error mt-4 text-center" }, { children: errorMsg }), void 0))] }), void 0));
}
function RegisterForm(p) {
    var _a = useState(false), loading = _a[0], setLoading = _a[1];
    var _b = useState(""), email = _b[0], setEmail = _b[1];
    var _c = useState(""), password = _c[0], setPassword = _c[1];
    var _d = useState(""), firstName = _d[0], setFirstName = _d[1];
    var _e = useState(""), lastName = _e[0], setLastName = _e[1];
    var _f = useState(""), errorMsg = _f[0], setErrorMsg = _f[1];
    function submit(evt) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        evt.preventDefault();
                        setLoading(true);
                        setErrorMsg("");
                        return [4 /*yield*/, p.supabase.auth.signUp({
                                email: email || "timroberton@gmail.com",
                                password: password || "eptept",
                            })];
                    case 1:
                        _b = _c.sent(), data = _b.data, error = _b.error;
                        if (error || !data.session) {
                            setLoading(false);
                            setErrorMsg((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Problem with sign in");
                        }
                        console.log(data, error);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs("form", __assign({ id: "registerForm", className: "w-96" }, { children: [_jsx("div", __assign({ className: "font-700 text-primary mt-4 text-center text-lg" }, { children: "Create an account for the app" }), void 0), _jsx("div", __assign({ className: "mt-4 mb-1 text-sm" }, { children: "Email" }), void 0), _jsx(Input, { type: "email", value: email, onChange: function (v) { return setEmail(v.target.value); }, autoFocus: true }, void 0), _jsx("div", __assign({ className: "mt-3 mb-1 text-sm" }, { children: "Password" }), void 0), _jsx(Input, { type: "password", value: password, onChange: function (v) { return setPassword(v.target.value); } }, void 0), _jsx("div", __assign({ className: "mt-3 mb-1 text-sm" }, { children: "First name" }), void 0), _jsx(Input, { type: "text", value: firstName, onChange: function (v) { return setFirstName(v.target.value); } }, void 0), _jsx("div", __assign({ className: "mt-3 mb-1 text-sm" }, { children: "Last name" }), void 0), _jsx(Input, { type: "text", value: lastName, onChange: function (v) { return setLastName(v.target.value); } }, void 0), _jsx("div", __assign({ className: "mt-4" }, { children: _jsx(Button, __assign({ className: "w-full", onClick: submit, type: "submit", form: "registerForm" }, { children: "Register" }), void 0) }), void 0), _jsx("div", __assign({ className: "mt-4 text-center" }, { children: _jsx("span", __assign({ className: "cursor-pointer hover:underline", onClick: function () { return p.changeLoginViewState("signin"); } }, { children: "Already have an account?" }), void 0) }), void 0), loading && _jsx("div", __assign({ className: "mt-4 text-center" }, { children: "Signing in..." }), void 0), errorMsg && (_jsx("div", __assign({ className: "text-error mt-4 text-center" }, { children: errorMsg }), void 0))] }), void 0));
}
function ResetPasswordRequest(p) {
    var _a = useState("userentry"), loading = _a[0], setLoading = _a[1];
    var _b = useState(""), email = _b[0], setEmail = _b[1];
    var _c = useState(""), errorMsg = _c[0], setErrorMsg = _c[1];
    function submit(evt) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, error;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        evt.preventDefault();
                        setLoading("sending");
                        setErrorMsg("");
                        return [4 /*yield*/, p.supabase.auth.resetPasswordForEmail(email || "timroberton@gmail.com", {
                                redirectTo: p.resetPasswordRedirectUrl,
                            })];
                    case 1:
                        _b = _c.sent(), data = _b.data, error = _b.error;
                        if (error) {
                            setLoading("userentry");
                            setErrorMsg((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Problem with sending reset password email");
                            return [2 /*return*/];
                        }
                        setLoading("finishedsending");
                        return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs("form", __assign({ id: "resetPasswordRequestForm", className: "w-96" }, { children: [(loading === "userentry" || loading === "sending") && (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "font-700 text-primary mt-4 text-center text-lg" }, { children: "Reset your password" }), void 0), _jsx("div", __assign({ className: "mt-4 mb-1 text-sm" }, { children: "Email" }), void 0), _jsx(Input, { type: "email", value: email, onChange: function (v) { return setEmail(v.target.value); }, autoFocus: true }, void 0), _jsx("div", __assign({ className: "mt-4" }, { children: _jsx(Button, __assign({ className: "w-full", onClick: submit, type: "submit", form: "resetPasswordRequestForm" }, { children: "Send email with link" }), void 0) }), void 0), _jsx("div", __assign({ className: "mt-4 text-center" }, { children: _jsx("span", __assign({ className: "cursor-pointer hover:underline", onClick: function () { return p.changeLoginViewState("signin"); } }, { children: "Remember your password?" }), void 0) }), void 0), loading === "sending" && (_jsx("div", __assign({ className: "mt-4 text-center" }, { children: "Sending email..." }), void 0)), errorMsg && (_jsx("div", __assign({ className: "text-error mt-4 text-center" }, { children: errorMsg }), void 0))] }, void 0)), loading === "finishedsending" && (_jsx("div", __assign({ className: "mt-4 text-center" }, { children: "Email sent! Check your email for a link to reset your password." }), void 0))] }), void 0));
}
function ResetPasswordForm(p) {
    var _a = useState(false), loading = _a[0], setLoading = _a[1];
    var _b = useState(""), password = _b[0], setPassword = _b[1];
    var _c = useState(""), errorMsg = _c[0], setErrorMsg = _c[1];
    useEffect(function () {
        var hashParams = getHashParams();
        if (hashParams["error_description"]) {
            setErrorMsg(hashParams["error_description"]);
        }
    }, []);
    function submit(evt) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, data, error, hashParams;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        evt.preventDefault();
                        setLoading(true);
                        setErrorMsg("");
                        return [4 /*yield*/, p.supabase.auth.updateUser({
                                password: password || "eptept",
                            })];
                    case 1:
                        _c = _d.sent(), data = _c.data, error = _c.error;
                        if (error) {
                            hashParams = getHashParams();
                            setLoading(false);
                            setErrorMsg((_b = (_a = hashParams["error_description"]) !== null && _a !== void 0 ? _a : error === null || error === void 0 ? void 0 : error.message) !== null && _b !== void 0 ? _b : "Problem with updating password");
                            return [2 /*return*/];
                        }
                        p.afterResetPassword();
                        return [2 /*return*/];
                }
            });
        });
    }
    return (_jsx("form", __assign({ id: "resetPasswordForm", className: "w-96" }, { children: errorMsg ? (_jsx("div", __assign({ className: "text-error mt-4 text-center" }, { children: errorMsg }), void 0)) : (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "font-700 text-primary mt-4 text-center text-lg" }, { children: "Enter a new password here" }), void 0), _jsx("div", __assign({ className: "mt-4 mb-1 text-sm" }, { children: "New password" }), void 0), _jsx(Input, { type: "password", value: password, onChange: function (v) { return setPassword(v.target.value); }, autoFocus: true }, void 0), _jsx("div", __assign({ className: "mt-4" }, { children: _jsx(Button, __assign({ className: "w-full", onClick: submit, type: "submit", form: "resetPasswordForm" }, { children: "Save" }), void 0) }), void 0), loading && (_jsx("div", __assign({ className: "mt-4 text-center" }, { children: "Resetting password..." }), void 0))] }, void 0)) }), void 0));
}
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
function getHashParams() {
    if (typeof window === "undefined") {
        return {};
    }
    return window.location.hash
        .substring(1)
        .split("&")
        .map(function (a) { return a.split("="); })
        .reduce(function (params, val) {
        if (val[0] && val[1]) {
            params[val[0]] = val[1].replaceAll("+", " ");
        }
        return params;
    }, {});
}
//# sourceMappingURL=login_page.js.map