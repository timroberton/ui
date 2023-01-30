"use client";
import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { InputWithLabel } from "./input";
export function LoginPage(p) {
    var _a = useState("signin"), loginViewState = _a[0], setLoginViewState = _a[1];
    return (_jsx("main", __assign({ className: "flex h-screen w-full items-start justify-center" }, { children: _jsxs("div", __assign({ className: "bg-base-200 text-base-content text-400 min-h-full w-full space-y-4 rounded py-10 px-12 sm:mt-24 sm:min-h-0 sm:w-96" }, { children: [p.logoLinkElement && (_jsx("div", __assign({ className: "w-full text-center" }, { children: p.logoLinkElement }))), p.type === "resetpasswordform" ? (_jsx(ResetPasswordForm, { changeLoginViewState: function (v) { return setLoginViewState(v); }, supabase: p.supabaseBrowserClient, afterResetPassword: p.afterResetPassword })) : (_jsxs(_Fragment, { children: [loginViewState === "signin" && (_jsx(SignInForm, { changeLoginViewState: function (v) { return setLoginViewState(v); }, supabase: p.supabaseBrowserClient })), loginViewState === "register" && (_jsx(RegisterForm, { changeLoginViewState: function (v) { return setLoginViewState(v); }, supabase: p.supabaseBrowserClient })), loginViewState === "resetpasswordrequest" && (_jsx(ResetPasswordRequest, { changeLoginViewState: function (v) { return setLoginViewState(v); }, supabase: p.supabaseBrowserClient, resetPasswordRedirectUrl: p.resetPasswordRedirectUrl }))] }))] })) })));
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
                            setErrorMsg((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Problem with sign in");
                            setLoading(false);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs("form", __assign({ id: "signInForm", className: "space-y-4" }, { children: [_jsx(FormHeader, { children: "Sign in to use the app" }), loading ? (_jsx("div", __assign({ className: "text-center" }, { children: "Signing in..." }))) : (_jsxs(_Fragment, { children: [_jsx(InputWithLabel, { rootId: "email", label: "Email", type: "email", autoComplete: "email", value: email, onChange: function (v) { return setEmail(v.target.value); }, autoFocus: true }), _jsx(InputWithLabel, { rootId: "password", label: "Password", type: "password", autoComplete: "current-password", value: password, onChange: function (v) { return setPassword(v.target.value); } }), _jsx(Button, __assign({ className: "w-full", type: "submit", form: "signInForm", onClick: submit }, { children: "Sign in" })), errorMsg && _jsx("div", __assign({ className: "text-error text-center" }, { children: errorMsg })), _jsxs("div", __assign({ className: "space-y-2" }, { children: [_jsx(SpanButton, __assign({ onClick: function () { return p.changeLoginViewState("register"); } }, { children: "Don't have an account?" })), _jsx(SpanButton, __assign({ onClick: function () { return p.changeLoginViewState("resetpasswordrequest"); } }, { children: "Forgot password?" }))] }))] }))] })));
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
                            setErrorMsg((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Problem creating an account");
                            setLoading(false);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs("form", __assign({ id: "registerForm", className: "space-y-4" }, { children: [_jsx(FormHeader, { children: "Create an account to use the app" }), loading ? (_jsx("div", __assign({ className: "text-center" }, { children: "Creating an account..." }))) : (_jsxs(_Fragment, { children: [_jsx(InputWithLabel, { rootId: "email", label: "Email", type: "email", autoComplete: "email", value: email, onChange: function (v) { return setEmail(v.target.value); }, autoFocus: true }), _jsx(InputWithLabel, { rootId: "password", label: "Password", type: "password", autoComplete: "new-password", value: password, onChange: function (v) { return setPassword(v.target.value); } }), _jsx(InputWithLabel, { rootId: "firstName", label: "First name", type: "text", autoComplete: "given-name", value: firstName, onChange: function (v) { return setFirstName(v.target.value); } }), _jsx(InputWithLabel, { rootId: "lastName", label: "Last name", type: "text", autoComplete: "family-name", value: lastName, onChange: function (v) { return setLastName(v.target.value); } }), _jsx(Button, __assign({ className: "w-full", type: "submit", form: "registerForm", onClick: submit }, { children: "Create account" })), errorMsg && _jsx("div", __assign({ className: "text-error text-center" }, { children: errorMsg })), _jsx(SpanButton, __assign({ onClick: function () { return p.changeLoginViewState("signin"); } }, { children: "Already have an account?" }))] }))] })));
}
function ResetPasswordRequest(p) {
    var _a = useState("userentry"), rprViewState = _a[0], setRprViewState = _a[1];
    var _b = useState(""), email = _b[0], setEmail = _b[1];
    var _c = useState(""), errorMsg = _c[0], setErrorMsg = _c[1];
    function submit(evt) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        evt.preventDefault();
                        setRprViewState("sending");
                        setErrorMsg("");
                        return [4 /*yield*/, p.supabase.auth.resetPasswordForEmail(email, {
                                redirectTo: p.resetPasswordRedirectUrl,
                            })];
                    case 1:
                        error = (_b.sent()).error;
                        if (error) {
                            setRprViewState("userentry");
                            setErrorMsg((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Problem sending email");
                            return [2 /*return*/];
                        }
                        setRprViewState("finishedsending");
                        return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs("form", __assign({ id: "resetPasswordRequestForm", className: "space-y-4" }, { children: [_jsx(FormHeader, { children: "Reset your password" }), rprViewState === "finishedsending" ? (_jsx("div", __assign({ className: "text-center" }, { children: "Email sent! Check your email for a link to reset your password." }))) : rprViewState === "sending" ? (_jsx("div", __assign({ className: "text-center" }, { children: "Sending email..." }))) : (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "text-base-content-lighter text-sm" }, { children: "Send a link to your email account, which you can use to reset your password." })), _jsx(InputWithLabel, { rootId: "email", label: "Email", type: "email", autoComplete: "email", value: email, onChange: function (v) { return setEmail(v.target.value); }, autoFocus: true }), _jsx(Button, __assign({ className: "w-full", onClick: submit, type: "submit", form: "resetPasswordRequestForm" }, { children: "Send email" })), errorMsg && _jsx("div", __assign({ className: "text-error text-center" }, { children: errorMsg })), _jsx(SpanButton, __assign({ onClick: function () { return p.changeLoginViewState("signin"); } }, { children: "Remember your password?" }))] }))] })));
}
function ResetPasswordForm(p) {
    var _a = useState(false), loading = _a[0], setLoading = _a[1];
    var _b = useState(""), password = _b[0], setPassword = _b[1];
    var _c = useState(""), linkErrorMsg = _c[0], setLinkErrorMsg = _c[1];
    var _d = useState(""), userErrorMsg = _d[0], setUserErrorMsg = _d[1];
    useEffect(function () {
        // Try to get error message from url (i.e. from supabase)
        var hashParams = getHashParams();
        if (hashParams["error_description"]) {
            setLinkErrorMsg(hashParams["error_description"]);
        }
    }, []);
    function submit(evt) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var hashParams, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        evt.preventDefault();
                        hashParams = getHashParams();
                        if (hashParams["error_description"]) {
                            setLinkErrorMsg(hashParams["error_description"]);
                            return [2 /*return*/];
                        }
                        setLoading(true);
                        setUserErrorMsg("");
                        return [4 /*yield*/, p.supabase.auth.updateUser({
                                password: password,
                            })];
                    case 1:
                        error = (_b.sent()).error;
                        if (error) {
                            if ((error === null || error === void 0 ? void 0 : error.message) === "Auth session missing!") {
                                setLinkErrorMsg("Email link is invalid or has expired");
                                return [2 /*return*/];
                            }
                            setUserErrorMsg((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Problem resetting password");
                            setLoading(false);
                            return [2 /*return*/];
                        }
                        p.afterResetPassword();
                        return [2 /*return*/];
                }
            });
        });
    }
    return (_jsx("form", __assign({ id: "resetPasswordForm", className: "space-y-4" }, { children: linkErrorMsg ? (_jsx("div", __assign({ className: "text-error text-center" }, { children: linkErrorMsg }))) : (_jsxs(_Fragment, { children: [_jsx(FormHeader, { children: "Enter a new password here" }), loading ? (_jsx("div", __assign({ className: "text-center" }, { children: "Resetting password..." }))) : (_jsxs(_Fragment, { children: [_jsx(InputWithLabel, { rootId: "newPassword", label: "New password", type: "password", autoComplete: "new-password", value: password, onChange: function (v) { return setPassword(v.target.value); }, autoFocus: true }), _jsx(Button, __assign({ className: "w-full", onClick: submit, type: "submit", form: "resetPasswordForm" }, { children: "Save" })), userErrorMsg && (_jsx("div", __assign({ className: "text-error text-center" }, { children: userErrorMsg })))] }))] })) })));
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
function SpanButton(p) {
    return (_jsx("div", __assign({ className: "text-center" }, { children: _jsx("span", __assign({ className: "text-base-content-lighter cursor-pointer text-sm hover:underline", onClick: p.onClick }, { children: p.children })) })));
}
function FormHeader(p) {
    return (_jsx("div", __assign({ className: "font-700 text-primary text-center text-lg" }, { children: p.children })));
}
//# sourceMappingURL=login_page.js.map