/// <reference types="react" />
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
export declare type LoginPageProps = LoginPagePropsSignInRegisterResetPasswordRequest | LoginPagePropsResetPasswordForm;
declare type LoginPagePropsSignInRegisterResetPasswordRequest = {
    type: "login";
    supabase: SupabaseClient;
    logoLinkElement?: React.ReactElement;
    resetPasswordRedirectUrl: string;
};
declare type LoginPagePropsResetPasswordForm = {
    type: "resetpasswordform";
    supabase: SupabaseClient;
    logoLinkElement?: React.ReactElement;
    afterResetPassword: () => void;
};
export declare function LoginPage(p: LoginPageProps): JSX.Element;
export {};
//# sourceMappingURL=login_page.d.ts.map