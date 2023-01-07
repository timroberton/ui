"use client";
import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
export function LoginPage(p) {
    var _a = useState("signin"), loginViewState = _a[0], setLoginViewState = _a[1];
    return (_jsx("main", __assign({ className: "grid h-screen w-screen place-items-center" }, { children: _jsxs("div", __assign({ className: "" }, { children: [p.logoLinkElement && (_jsx("div", __assign({ className: "w-full text-center" }, { children: p.logoLinkElement }), void 0)), loginViewState === "signin" && (_jsx(SignInForm, { changeLoginViewState: function (v) { return setLoginViewState(v); }, supabase: p.supabase }, void 0)), loginViewState === "register" && (_jsx(RegisterForm, { changeLoginViewState: function (v) { return setLoginViewState(v); }, supabase: p.supabase }, void 0)), loginViewState === "resetpassword" && (_jsx(ResetPasswordForm, { changeLoginViewState: function (v) { return setLoginViewState(v); }, supabase: p.supabase }, void 0))] }), void 0) }), void 0));
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
    return (_jsxs("form", __assign({ id: "signInForm", className: "w-96 pb-32" }, { children: [_jsx("div", __assign({ className: "mt-4 text-center text-lg font-700 text-primary" }, { children: "Sign in to use the app" }), void 0), _jsx("div", __assign({ className: "mt-4 mb-1 text-sm" }, { children: "Email" }), void 0), _jsx(Input, { type: "email", value: email, onChange: function (v) { return setEmail(v.target.value); }, autoFocus: true }, void 0), _jsx("div", __assign({ className: "mt-3 mb-1 text-sm" }, { children: "Password" }), void 0), _jsx(Input, { type: "password", value: password, onChange: function (v) { return setPassword(v.target.value); } }, void 0), _jsx("div", __assign({ className: "mt-4" }, { children: _jsx(Button, __assign({ className: "w-full", onClick: submit, type: "submit", form: "signInForm" }, { children: "Sign in" }), void 0) }), void 0), _jsx("div", __assign({ className: "mt-4 text-center" }, { children: _jsx("span", __assign({ onClick: function () { return p.changeLoginViewState("register"); } }, { children: "Don't have an account?" }), void 0) }), void 0), _jsx("div", __assign({ className: "mt-4 text-center" }, { children: _jsx("span", __assign({ onClick: function () { return p.changeLoginViewState("resetpassword"); } }, { children: "Forgot password?" }), void 0) }), void 0), loading && _jsx("div", __assign({ className: "" }, { children: "Signing in..." }), void 0), errorMsg && _jsx("div", __assign({ className: "text-error" }, { children: errorMsg }), void 0)] }), void 0));
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
    return (_jsxs("form", __assign({ id: "registerForm", className: "w-96 pb-32" }, { children: [_jsx("div", __assign({ className: "mt-4 text-center text-lg font-700 text-primary" }, { children: "Create an account for the app" }), void 0), _jsx("div", __assign({ className: "mt-4 mb-1 text-sm" }, { children: "Email" }), void 0), _jsx(Input, { type: "email", value: email, onChange: function (v) { return setEmail(v.target.value); }, autoFocus: true }, void 0), _jsx("div", __assign({ className: "mt-3 mb-1 text-sm" }, { children: "Password" }), void 0), _jsx(Input, { type: "password", value: password, onChange: function (v) { return setPassword(v.target.value); } }, void 0), _jsx("div", __assign({ className: "mt-3 mb-1 text-sm" }, { children: "First name" }), void 0), _jsx(Input, { type: "text", value: firstName, onChange: function (v) { return setFirstName(v.target.value); } }, void 0), _jsx("div", __assign({ className: "mt-3 mb-1 text-sm" }, { children: "Last name" }), void 0), _jsx(Input, { type: "text", value: lastName, onChange: function (v) { return setLastName(v.target.value); } }, void 0), _jsx("div", __assign({ className: "mt-4" }, { children: _jsx(Button, __assign({ className: "w-full", onClick: submit, type: "submit", form: "registerForm" }, { children: "Register" }), void 0) }), void 0), _jsx("div", __assign({ className: "mt-4 text-center" }, { children: _jsx("span", __assign({ onClick: function () { return p.changeLoginViewState("signin"); } }, { children: "Already have an account?" }), void 0) }), void 0), loading && _jsx("div", __assign({ className: "" }, { children: "Signing in..." }), void 0), errorMsg && _jsx("div", __assign({ className: "text-error" }, { children: errorMsg }), void 0)] }), void 0));
}
function ResetPasswordForm(p) {
    var _a = useState(false), loading = _a[0], setLoading = _a[1];
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
                        setLoading(true);
                        setErrorMsg("");
                        return [4 /*yield*/, p.supabase.auth.resetPasswordForEmail(email || "timroberton@gmail.com")];
                    case 1:
                        _b = _c.sent(), data = _b.data, error = _b.error;
                        if (error) {
                            setLoading(false);
                            setErrorMsg((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Problem with password reset");
                        }
                        console.log(data, error);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs("form", __assign({ id: "resetPasswordForm", className: "w-96 pb-32" }, { children: [_jsx("div", __assign({ className: "mt-4 text-center text-lg font-700 text-primary" }, { children: "Reset your password" }), void 0), _jsx("div", __assign({ className: "mt-4 mb-1 text-sm" }, { children: "Email" }), void 0), _jsx(Input, { type: "email", value: email, onChange: function (v) { return setEmail(v.target.value); }, autoFocus: true }, void 0), _jsxs("div", __assign({ className: "mt-4" }, { children: [_jsx(Button, __assign({ onClick: submit, type: "submit", form: "resetPasswordForm" }, { children: "Send email with link" }), void 0), _jsx(Button, __assign({ onClick: function () { return p.changeLoginViewState("signin"); } }, { children: "Sign in" }), void 0)] }), void 0), loading && _jsx("div", __assign({ className: "" }, { children: "Signing in..." }), void 0), errorMsg && _jsx("div", __assign({ className: "text-error" }, { children: errorMsg }), void 0)] }), void 0));
}
//# sourceMappingURL=login_page.js.map