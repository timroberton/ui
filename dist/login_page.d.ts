/// <reference types="react" />
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
export declare type LoginPageProps = {
    supabase: SupabaseClient;
    logoLinkElement?: React.ReactElement;
    resetPasswordRedirectUrl: string;
    showResetPasswordForm: boolean;
    cancelResetPasswordForm: () => void;
};
export declare function LoginPage(p: LoginPageProps): JSX.Element;
//# sourceMappingURL=login_page.d.ts.map