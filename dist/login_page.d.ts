/// <reference types="react" />
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
export type LoginPageProps = LoginPagePropsSignInRegisterResetPasswordRequest | LoginPagePropsResetPasswordForm;
type LoginPagePropsSignInRegisterResetPasswordRequest = {
    type: "login";
    supabaseBrowserClient: SupabaseClient<any>;
    logoLinkElement?: React.ReactElement;
    resetPasswordRedirectUrl: string;
};
type LoginPagePropsResetPasswordForm = {
    type: "resetpasswordform";
    supabaseBrowserClient: SupabaseClient<any>;
    logoLinkElement?: React.ReactElement;
    afterResetPassword: () => void;
};
export declare function LoginPage(p: LoginPageProps): JSX.Element;
export {};
//# sourceMappingURL=login_page.d.ts.map